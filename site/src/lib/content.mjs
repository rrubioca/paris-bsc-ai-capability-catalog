import fs from 'node:fs/promises';
import path from 'node:path';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkStringify from 'remark-stringify';
import { toString } from 'mdast-util-to-string';
import { visit } from 'unist-util-visit';
import GithubSlugger from 'github-slugger';
import { z } from 'zod';
import { assets, base, documents, pageUrl, repository } from './manifest.mjs';

const parser = unified().use(remarkParse).use(remarkGfm).use(remarkStringify);
const sourceSchema = z.object({ path: z.string(), anchor: z.string(), line: z.number().int().positive() });
export const recordSchema = z.object({
  id: z.string().regex(/^(SAIF-AI-\d{3}|(?:UC|TC|DEMO|VAL|EXT)-\d{2}|EVD-[A-Z]+-\d{3}|RM-\d{3}(?:-P[1-4])?)$/),
  type: z.enum(['solution', 'useCase', 'capability', 'demonstration', 'validation', 'evidence', 'reference', 'roadmap', 'phase']),
  title: z.string().min(1),
  source: sourceSchema,
  href: z.string(),
  relations: z.array(z.string()),
  fields: z.record(z.string(), z.string()),
  solutionId: z.string().regex(/^SAIF-AI-\d{3}$/).optional(),
  status: z.object({ domain: z.enum(['solution', 'claim', 'demonstration', 'validation', 'evidence', 'progress']), label: z.string().min(1) }).optional()
}).strict();

export function parseDocument(config, markdown) {
  const tree = parser.parse(markdown);
  const slugger = new GithubSlugger();
  const headings = [];
  visit(tree, 'heading', node => {
    node.anchor = slugger.slug(toString(node));
    headings.push({ depth: node.depth, text: toString(node), slug: node.anchor });
  });
  const title = headings.find(h => h.depth === 1)?.text;
  if (!title) throw new Error(`${config.path}: missing H1 title`);
  return { ...config, markdown, tree, title, headings };
}

// Read only explicit public inputs, never traverse the repository to discover content.
export async function readPublicSources(root) {
  const result = new Map();
  for (const file of [...documents.map(d => d.path), ...assets]) {
    let current = path.resolve(root);
    for (const segment of file.split('/')) {
      current = path.join(current, segment);
      if ((await fs.lstat(current)).isSymbolicLink()) throw new Error(`Symbolic link not allowed: ${file}`);
    }
    result.set(file, await fs.readFile(current, 'utf8'));
  }
  const publicDir = path.join(root, 'site/public');
  const publicFiles = await fs.readdir(publicDir);
  if (publicFiles.length !== 1 || publicFiles[0] !== 'favicon.svg') throw new Error('Unreviewed presentation asset in site/public');
  const favicon = path.join(publicDir, 'favicon.svg');
  if ((await fs.lstat(favicon)).isSymbolicLink()) throw new Error('Symbolic link not allowed: favicon');
  assertPassiveSvg(await fs.readFile(favicon, 'utf8'), 'favicon.svg');
  return result;
}

function assertPassiveSvg(svg, file) {
  if (!svg || !svg.includes('<svg') || /<script|<foreignObject|<!DOCTYPE|<!ENTITY|(?:href|src)\s*=|\bon[a-z]+\s*=|@import|url\(\s*[^#]/i.test(svg)) throw new Error(`${file}: unreviewed SVG content`);
}

function sections(doc, depth = 2) {
  return doc.tree.children.flatMap((node, index, nodes) => {
    if (node.type !== 'heading' || node.depth !== depth) return [];
    let end = index + 1;
    while (end < nodes.length && !(nodes[end].type === 'heading' && nodes[end].depth <= depth)) end++;
    return [{ heading: node, nodes: nodes.slice(index + 1, end), title: toString(node), index }];
  });
}

function field(nodes, label) {
  const paragraph = nodes.find(n => n.type === 'paragraph' && n.children[0]?.type === 'strong' && toString(n.children[0]).startsWith(label));
  if (!paragraph) throw new Error(`Missing required field: ${label}`);
  const text = toString(paragraph);
  return text.slice(label.length).replace(/^:\s*/, '').trim();
}

function table(nodes) {
  const node = nodes.find(n => n.type === 'table');
  if (!node) throw new Error('Missing required table');
  return node.children.slice(1).map(row => ({ node: row, cells: row.children.map(toString) }));
}

function rowField(rows, key) {
  const row = rows.find(r => r.cells[0] === key);
  if (!row) throw new Error(`Missing table field: ${key}`);
  return row.cells[1];
}

function sourceFor(doc, node) {
  return { path: doc.path, anchor: node.anchor ?? '', line: node.position.start.line };
}

function sectionScope(doc, section) {
  function explicitScope(nodes) {
    const scopes = new Set();
    for (const node of nodes) {
      if (node.type === 'heading') break;
      if (node.type === 'paragraph' && toString(node).startsWith('Catalog entry:')) {
        const id = toString(node).match(/SAIF-AI-\d{3}/)?.[0];
        if (id) scopes.add(id);
      }
      if (node.type === 'table') {
        const row = node.children.find(row => toString(row.children[0]) === 'Catalog entry');
        const id = row && toString(row.children[1]).match(/SAIF-AI-\d{3}/)?.[0];
        if (id) scopes.add(id);
      }
    }
    if (scopes.size > 1) throw new Error(`${doc.path}: conflicting catalog entry scope`);
    return [...scopes][0];
  }
  const own = explicitScope(section.nodes);
  const ancestor = sections(doc).find(s => s.nodes.includes(section.heading));
  return own ?? (ancestor ? explicitScope(ancestor.nodes) : undefined);
}

export function resolveLink(doc, url, docs, prefix = base) {
  if (/^https:\/\//i.test(url)) return { kind: 'external', href: url };
  if (/^[a-z][a-z0-9+.-]*:/i.test(url) || url.startsWith('//')) throw new Error(`${doc.path}: unsafe URL protocol`);
  const [rawPath, rawAnchor = ''] = url.split('#');
  const decoded = decodeURIComponent(rawPath);
  const anchor = decodeURIComponent(rawAnchor);
  if (decoded.includes('\\') || decoded.includes('?') || decoded.startsWith('/')) throw new Error(`${doc.path}: unsupported source URL ${url}`);
  const target = rawPath ? path.posix.normalize(path.posix.join(path.posix.dirname(doc.path), decoded)) : doc.path;
  const targetDoc = docs.get(target);
  if (targetDoc) {
    if (anchor && !targetDoc.headings.some(h => h.slug === anchor)) throw new Error(`${doc.path}: missing anchor ${url}`);
    return { kind: 'document', path: target, anchor, href: pageUrl(targetDoc.route, prefix) + (anchor ? `#${encodeURIComponent(anchor)}` : '') };
  }
  if (assets.includes(target) && !anchor) return { kind: 'asset', path: target, href: `${prefix}/${target}` };
  throw new Error(`${doc.path}: unpublished or missing target ${url}`);
}

function linksIn(nodes) {
  const links = [];
  visit({ type: 'root', children: nodes }, node => {
    if (['link', 'image', 'definition'].includes(node.type)) links.push(node.url);
  });
  return links;
}

function identifiers(text) {
  const ids = new Set(text.match(/\b(?:SAIF-AI-\d{3}|(?:UC|TC|DEMO|VAL|EXT)-\d{2}|EVD-[A-Z]+-\d{3}|RM-\d{3})\b/g) ?? []);
  for (const range of text.matchAll(/\b(UC|TC|DEMO|VAL|EXT)-(\d{2})[–-](?:\1-)?(\d{2})\b/g)) {
    const first = Number(range[2]);
    const last = Number(range[3]);
    if (last < first || last - first > 99) throw new Error('Invalid identifier range');
    for (let i = first; i <= last; i++) ids.add(`${range[1]}-${String(i).padStart(2, '0')}`);
  }
  return [...ids];
}

export function buildCatalog(sources, prefix = base) {
  const docs = new Map(documents.map(config => {
    if (!sources.has(config.path)) throw new Error(`Missing public document: ${config.path}`);
    const doc = parseDocument(config, sources.get(config.path));
    return [doc.path, doc];
  }));
  let linkCount = 0;
  for (const doc of docs.values()) {
    for (const url of linksIn(doc.tree.children)) { resolveLink(doc, url, docs, prefix); linkCount++; }
    visit(doc.tree, 'html', node => {
      // Existing source uses only details/summary for the non-executable Mermaid source.
      if (!/^(?:\s*<\/?(?:details|summary)>[^<>]*)+\s*$/s.test(node.value)) throw new Error(`${doc.path}: unreviewed raw HTML`);
    });
  }
  for (const file of assets) {
    assertPassiveSvg(sources.get(file), file);
  }
  const records = [];
  const recordNodes = new Map();
  function add(doc, section, data) {
    if (records.some(r => r.id === data.id)) throw new Error(`Duplicate record: ${data.id}`);
    const source = sourceFor(doc, section.heading);
    const solutionId = data.solutionId ?? sectionScope(doc, section);
    const record = recordSchema.parse({ ...data, source, href: pageUrl(doc.route, prefix) + `#${source.anchor}`, relations: [], fields: data.fields ?? {}, ...(solutionId ? { solutionId } : {}) });
    records.push(record);
    recordNodes.set(record.id, { doc, nodes: section.nodes });
    return record;
  }

  const overview = docs.get('docs/demo-overview.md');
  const pilotLabel = toString(overview.tree.children.find(n => n.type === 'blockquote')?.children[0]);
  for (const doc of docs.values()) {
    if (doc.path === 'docs/roadmap.md') continue;
    const quote = doc.tree.children.find(n => n.type === 'blockquote');
    if (quote && toString(quote.children[0]) !== pilotLabel) throw new Error(`${doc.path}: pilot status banner drift from overview`);
  }
  for (const glance of sections(overview).filter(s => s.nodes.some(n => n.type === 'table'))) {
    const rows = table(glance.nodes);
    if (!rows.some(r => r.cells[0] === 'Catalog entry')) continue;
    const entry = rowField(rows, 'Catalog entry');
    const id = entry.match(/^SAIF-AI-\d{3}/)?.[0];
    add(overview, glance, { id, type: 'solution', title: entry.replace(/^SAIF-AI-\d{3}\s*—\s*/, ''),
      status: { domain: 'solution', label: rowField(rows, 'Current status') }, fields: Object.fromEntries(rows.map(r => r.cells)) });
  }
  if (!records.some(r => r.type === 'solution')) throw new Error('Missing canonical solution overview');

  const business = docs.get('docs/business-use-cases.md');
  for (const section of sections(business)) {
    const id = section.nodes.map(toString).join('\n').match(/^Use case: (UC-\d{2})$/m)?.[1];
    if (!id) continue;
    add(business, section, { id, type: 'useCase', title: section.title,
      fields: { problemAndAudience: field(section.nodes, 'Problem and audience:'), discovery: field(section.nodes, 'Discovery:'), evaluationFocus: field(section.nodes, 'Evaluation focus:') } });
  }

  for (const [file, type, pattern] of [
    ['docs/capabilities.md', 'capability', /^(TC-\d{2}) — (.+)$/],
    ['docs/demonstrations.md', 'demonstration', /^(DEMO-\d{2}) — (.+)$/],
    ['docs/validation.md', 'evidence', /^(EVD-[A-Z]+-\d{3}) — (.+)$/],
    ['docs/references.md', 'reference', /^(EXT-\d{2}) — (.+)$/]
  ]) {
    const doc = docs.get(file);
    for (const section of sections(doc)) {
      const match = section.title.match(pattern);
      if (!match) continue;
      let status;
      let fields = {};
      if (type === 'capability') {
        status = { domain: 'claim', label: field(section.nodes, 'Status:') };
        fields.purpose = field(section.nodes, 'Purpose:');
      } else if (type === 'demonstration') {
        const rows = table(section.nodes);
        fields = Object.fromEntries(rows.map(r => r.cells));
        status = { domain: 'demonstration', label: rowField(rows, match[1] === 'DEMO-01' ? 'Runtime demonstration status' : 'Live execution status') };
      } else if (type === 'evidence') {
        const paragraph = section.nodes.find(n => n.type === 'paragraph' && toString(n.children[0]).startsWith('Record status:'));
        const label = toString(paragraph?.children[0]);
        if (!label.startsWith('Record status:')) throw new Error(`Missing evidence status: ${match[1]}`);
        status = { domain: 'evidence', label: label.replace(/^Record status:\s*/, '') };
      }
      add(doc, section, { id: match[1], type, title: match[2], fields, ...(status ? { status } : {}) });
    }
  }

  const validation = docs.get('docs/validation.md');
  const matrix = sections(validation).find(s => s.title === 'Source and test status matrix');
  if (!matrix) throw new Error('Missing validation matrix');
  const validationStates = new Set(['SOURCE VERIFIED', 'HISTORICALLY REPORTED', 'TEST DEFINITION PRESENT', 'PENDING']);
  for (const row of table(matrix.nodes)) {
    const [id, title, label, finding, nextEvidence] = row.cells;
    if (!label.split(';').every(s => validationStates.has(s.trim()))) throw new Error(`Unknown validation state: ${id}`);
    add(validation, { ...matrix, heading: { ...matrix.heading, position: row.node.position }, nodes: [row.node] }, { id, type: 'validation', title, solutionId: sectionScope(validation, matrix),
      status: { domain: 'validation', label }, fields: { finding, nextEvidence } });
  }

  const roadmap = docs.get('docs/roadmap.md');
  const purpose = sections(roadmap).find(s => s.title === 'Purpose and status');
  if (!purpose) throw new Error('Missing roadmap project table');
  for (const row of table(purpose.nodes)) {
    const [entry, label, nextGate] = row.cells;
    const match = entry.match(/^(RM-\d{3}) — (.+)$/);
    if (!match || !['PLANNED', 'IN PROGRESS', 'COMPLETED', 'BLOCKED', 'CANCELLED'].includes(label)) throw new Error('Invalid roadmap project');
    const project = sections(roadmap).find(s => s.title === `${match[1]} project`);
    if (!project) throw new Error(`Missing project section: ${match[1]}`);
    add(roadmap, project, { id: match[1], type: 'roadmap', title: match[2], status: { domain: 'progress', label }, fields: { nextGate } });
    for (const phase of sections(roadmap, 3).filter(s => project.nodes.includes(s.heading))) {
      const number = phase.title.match(/^Phase ([1-4]) — /)?.[1];
      if (!number) continue;
      const strong = phase.nodes.find(n => n.type === 'paragraph')?.children[0];
      const label = toString(strong).replace(/^Status:\s*/, '').replace(/\.$/, '');
      if (!/^(PLANNED|IN PROGRESS|COMPLETED|BLOCKED|CANCELLED)(?: — .+)?$/.test(label)) throw new Error(`Invalid phase progress: ${phase.title}`);
      add(roadmap, phase, { id: `${match[1]}-P${number}`, type: 'phase', title: phase.title, status: { domain: 'progress', label } });
    }
  }

  for (const record of records) {
    if (['useCase', 'capability', 'demonstration', 'evidence', 'validation'].includes(record.type) && !record.solutionId) throw new Error(`${record.id}: missing catalog entry scope`);
    const { doc, nodes } = recordNodes.get(record.id);
    const relations = new Set();
    visit({ type: 'root', children: nodes }, 'link', link => {
      const target = resolveLink(doc, link.url, docs, prefix);
      if (target.kind !== 'document') return;
      const named = identifiers(toString(link));
      for (const id of named) {
        const other = records.find(r => r.id === id);
        if (!other || other.source.path !== target.path || (target.anchor && other.source.anchor !== target.anchor)) throw new Error(`${record.id}: identifier/link mismatch ${id}`);
        if (other.id !== record.id) relations.add(other.id);
      }
      // Generic links to a registry are navigation, not a relationship to every record in it.
      if (!named.length && target.anchor) for (const other of records) if (other.id !== record.id && other.source.path === target.path && other.source.anchor === target.anchor) relations.add(other.id);
    });
    if (record.type === 'phase') relations.add(record.id.replace(/-P\d$/, ''));
    record.relations = [...relations].sort();
    if (record.type === 'useCase') {
      for (const kind of ['TC-', 'DEMO-', 'EXT-']) if (!record.relations.some(id => id.startsWith(kind))) throw new Error(`${record.id}: missing ${kind} relationship`);
    }
    recordSchema.parse(record);
  }
  for (const record of records) {
    if (record.solutionId && !records.some(r => r.type === 'solution' && r.id === record.solutionId)) throw new Error(`${record.id}: missing solution scope`);
    recordSchema.parse(record);
  }
  return { docs, records, linkCount, sources, base: prefix };
}

export function portalMarkdown(doc, catalog) {
  const tree = structuredClone(doc.tree);
  visit(tree, node => {
    if (['link', 'image', 'definition'].includes(node.type)) node.url = resolveLink(doc, node.url, catalog.docs, catalog.base).href;
  });
  return parser.stringify(tree);
}

// Preserve GitHub-compatible heading IDs, including the H1 removed by Starlight's title.
export function sourceHeadings() {
  return tree => {
    const slugger = new GithubSlugger();
    visit(tree, 'heading', node => {
      const id = slugger.slug(toString(node));
      node.data ??= {};
      node.data.hProperties = { ...node.data.hProperties, id };
    });
    const index = tree.children.findIndex(node => node.type === 'heading' && node.depth === 1);
    if (index !== -1) tree.children[index] = { type: 'html', value: `<span id="${tree.children[index].data.hProperties.id}"></span>` };
  };
}

export function editUrl(doc) { return `${repository}/edit/main/${doc.path}`; }
