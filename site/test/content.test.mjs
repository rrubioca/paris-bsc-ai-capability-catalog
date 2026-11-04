import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import { visit } from 'unist-util-visit';
import { buildCatalog, portalMarkdown, readPublicSources, resolveLink, sourceHeadings, recordSchema } from '../src/lib/content.mjs';
import { assertMarketingEdit } from '../src/lib/editorial.mjs';
import { repoRoot } from '../src/lib/catalog-loader.mjs';

const sources = await readPublicSources(repoRoot);
const catalog = buildCatalog(sources);
const record = (data, id) => data.records.find(r => r.id === id);

test('reads all public documents and preserves each record identity, including separate roadmap phases', () => {
  assert.equal(catalog.docs.size, 16);
  const inlineReferences = [...sources.values()].reduce((count, text) => count + [...text.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)].length, 0);
  assert.equal(catalog.linkCount, inlineReferences);
  assert.equal(new Set(catalog.records.map(r => r.id)).size, catalog.records.length);
  for (const id of ['UC-01', 'UC-06', 'UC-07', 'UC-11', 'SAIF-AI-002', 'RM-002-P4']) assert.ok(record(catalog, id), id);
  assert.equal(record(catalog, 'RM-001').status.domain, 'progress');
  assert.equal(record(catalog, 'EVD-RAG-001').status.domain, 'evidence');
  assert.equal(record(catalog, 'VAL-03').status.domain, 'validation');
  assert.equal(record(catalog, 'SAIF-AI-001').status.domain, 'solution');
  assert.match(record(catalog, 'SAIF-AI-001').status.label, /Under laboratory validation/);
  assert.match(record(catalog, 'SAIF-AI-002').status.label, /^VALIDATED DEMONSTRATION/);
  assert.equal(record(catalog, 'RM-002').status.label, 'PLANNED');
  for (const id of ['UC-01', 'UC-06', 'TC-01', 'DEMO-01', 'EVD-RAG-001', 'VAL-01']) assert.equal(record(catalog, id).solutionId, 'SAIF-AI-001', id);
  for (const id of ['UC-07', 'UC-11', 'TC-05', 'DEMO-03', 'EVD-VSS-001', 'RM-002-P4']) assert.equal(record(catalog, id).solutionId, 'SAIF-AI-002', id);
});

test('one original business edit changes both the data projection and rendered Markdown', () => {
  const changed = new Map(sources);
  const file = 'docs/business-use-cases.md';
  const oldText = 'operations and enablement teams need to locate';
  changed.set(file, sources.get(file).replace(oldText, 'partner teams need to locate'));
  const next = buildCatalog(changed);
  assert.match(record(next, 'UC-01').fields.problemAndAudience, /^partner teams/);
  assert.match(portalMarkdown(next.docs.get(file), next), /partner teams need to locate/);
  assert.equal(record(next, 'UC-02').fields.problemAndAudience, record(catalog, 'UC-02').fields.problemAndAudience);
});

test('canonical ledger status is read verbatim without inferring runtime approval or success', () => {
  const changed = new Map(sources);
  const file = 'docs/validation.md';
  changed.set(file, sources.get(file).replace('| VAL-08 | Live cleanup and retention | PENDING |', '| VAL-08 | Live cleanup and retention | SOURCE VERIFIED |'));
  const next = record(buildCatalog(changed), 'VAL-08');
  assert.equal(next.status.label, 'SOURCE VERIFIED');
  assert.equal(Object.hasOwn(next, 'validated'), false);
  assert.throws(() => recordSchema.parse({ ...next, validated: true }));
});

test('unknown validation vocabulary and missing required fields stop generation', () => {
  const changed = new Map(sources);
  changed.set('docs/validation.md', sources.get('docs/validation.md').replace('| VAL-08 | Live cleanup and retention | PENDING |', '| VAL-08 | Live cleanup and retention | READY |'));
  assert.throws(() => buildCatalog(changed), /Unknown validation state/);
  changed.set('docs/validation.md', sources.get('docs/validation.md'));
  changed.set('docs/capabilities.md', sources.get('docs/capabilities.md').replace('**Status:**', '**New field:**'));
  assert.throws(() => buildCatalog(changed), /Missing required field/);
});

test('commercial relationships resolve a capability range to its actual target records', () => {
  const uc = record(catalog, 'UC-06');
  for (const id of ['TC-01', 'TC-02', 'TC-03', 'TC-04', 'DEMO-01', 'DEMO-02', 'EXT-01', 'EXT-02', 'EXT-05']) assert.ok(uc.relations.includes(id), id);
  assert.ok(!uc.relations.includes('TC-05'), 'A RAG capability range must not acquire the VSS record');
});

test('all original local targets rewrite to Pages-prefixed URLs, including root README and SVGs', () => {
  const doc = catalog.docs.get('docs/architecture.md');
  assert.equal(resolveLink(doc, '../README.md#executive-summary', catalog.docs).href, '/paris-bsc-ai-capability-catalog/catalog/#executive-summary');
  assert.equal(resolveLink(doc, 'assets/rag-data-flow.svg', catalog.docs).href, '/paris-bsc-ai-capability-catalog/docs/assets/rag-data-flow.svg');
  const custom = buildCatalog(sources, '');
  assert.equal(resolveLink(doc, 'validation.md', custom.docs, '').href, '/docs/validation/');
});

test('broken anchors, private/unlisted files, path traversal and active protocols are rejected', () => {
  const doc = catalog.docs.get('README.md');
  for (const url of ['docs/validation.md#missing', '../openshell-integration/README.md', 'site/package.json', '%2e%2e/secret.md', 'javascript:alert(1)', '//example.org/x']) assert.throws(() => resolveLink(doc, url, catalog.docs));
  assert.equal(resolveLink(doc, 'https://docs.nvidia.com/rag/latest/index.html', catalog.docs).kind, 'external');
});

test('unlisted files never become publication inputs and active SVG/HTML stops the build', () => {
  const changed = new Map(sources);
  changed.set('private/secret.md', 'not public');
  assert.equal(buildCatalog(changed).docs.size, 16);
  changed.set('docs/assets/rag-data-flow.svg', '<svg><script>alert(1)</script></svg>');
  assert.throws(() => buildCatalog(changed), /unreviewed SVG/);
  changed.set('docs/assets/rag-data-flow.svg', sources.get('docs/assets/rag-data-flow.svg'));
  changed.set('README.md', sources.get('README.md') + '\n<script>alert(1)</script>\n');
  assert.throws(() => buildCatalog(changed), /unreviewed raw HTML/);
});

test('source heading IDs preserve GitHub em-dash anchors and duplicate-heading suffixes', () => {
  const tree = unified().use(remarkParse).parse('# Title\n\n## DEMO-01 — Question answering\n\n## Repeat\n\n## Repeat');
  sourceHeadings()(tree);
  const ids = [];
  visit(tree, 'heading', node => { ids.push(node.data.hProperties.id); });
  assert.deepEqual(ids, ['demo-01--question-answering', 'repeat', 'repeat-1']);
  assert.equal(tree.children[0].value, '<span id="title"></span>');
});

test('status banner drift is detected rather than silently publishing contradictory badges', () => {
  const changed = new Map(sources);
  changed.set('README.md', sources.get('README.md').replace('UNDER VALIDATION — PARIS BSC LABORATORY', 'READY'));
  assert.throws(() => buildCatalog(changed), /pilot status banner drift/);
});

test('marketing can edit original commercial fields without altering technical references', () => {
  const file = 'docs/business-use-cases.md';
  const before = sources.get(file);
  assert.ok(assertMarketingEdit(file, before, before.replace('Potential value is a clearer route', 'Potential value is an easier route')));
  const overview = 'docs/demo-overview.md';
  assert.ok(assertMarketingEdit(overview, sources.get(overview), sources.get(overview).replace('Business sponsors, sales and partner teams', 'Business leaders, sales and partner teams')));
});

test('marketing guard rejects status, IDs, references, field identities and technical-source changes', () => {
  const file = 'docs/business-use-cases.md';
  const before = sources.get(file);
  for (const changed of [
    before.replace('UC-01', 'UC-99'),
    before.replace('UNDER VALIDATION', 'VALIDATED'),
    before.replace('capabilities.md#tc-01--document-ingestion', 'https://example.org'),
    before.replace('**Problem and audience:**', '**Discovery:**')
  ]) assert.throws(() => assertMarketingEdit(file, before, changed));
  assert.throws(() => assertMarketingEdit('docs/validation.md', sources.get('docs/validation.md'), sources.get('docs/validation.md')));
});

test('no second Markdown documentation tree is authored inside the site', async () => {
  await assert.rejects(fs.access(new URL('../src/content/docs', import.meta.url)));
});
