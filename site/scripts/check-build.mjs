import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { base, documents, assets } from '../src/lib/manifest.mjs';
import { buildCatalog, readPublicSources } from '../src/lib/content.mjs';
import { repoRoot } from '../src/lib/catalog-loader.mjs';

const root = fileURLToPath(new URL('../dist/', import.meta.url));
const all = new Map();
async function walk(dir) {
  for (const item of await fs.readdir(dir, { withFileTypes: true })) {
    const file = path.join(dir, item.name);
    if (item.isDirectory()) await walk(file);
    else all.set(path.relative(root, file).replaceAll('\\', '/'), file);
  }
}
await walk(root);
const decode = value => value.replaceAll('&amp;', '&').replaceAll('&quot;', '"').replace(/&#(x[\da-f]+|\d+);/gi, (_, n) => String.fromCodePoint(n[0] === 'x' ? parseInt(n.slice(1), 16) : Number(n)));
const ids = new Map();
const htmlFiles = new Map();
for (const [name, file] of all) if (name.endsWith('.html')) {
  const html = await fs.readFile(file, 'utf8');
  htmlFiles.set(name, html);
  const values = [...html.matchAll(/\bid=(?:"([^"]*)"|'([^']*)')/g)].map(m => decode(m[1] ?? m[2]));
  if (new Set(values).size !== values.length) throw new Error(`${name}: duplicate HTML IDs`);
  ids.set(name, new Set(values));
}
function outputName(url) {
  const decoded = decodeURIComponent(url.pathname);
  if (!decoded.startsWith(`${base}/`)) throw new Error(`Missing Pages base: ${decoded}`);
  const name = decoded.slice(base.length + 1);
  return name.endsWith('/') || !name ? `${name}index.html` : name;
}
let checked = 0;
for (const [name, html] of htmlFiles) {
  const location = `https://rrubioca.github.io${base}/${name.replace(/index\.html$/, '')}`;
  for (const match of html.matchAll(/\b(?:href|src)=(?:"([^"]*)"|'([^']*)')/g)) {
    const target = decode(match[1] ?? match[2]);
    if (/^(?:https?:|data:|mailto:|tel:)/.test(target) || target.startsWith('//')) continue;
    const url = new URL(target, location);
    const output = outputName(url);
    if (!all.has(output)) throw new Error(`${name}: missing output ${target}`);
    if (url.hash && ids.has(output) && !ids.get(output).has(decodeURIComponent(url.hash.slice(1)))) throw new Error(`${name}: missing output fragment ${target}`);
    checked++;
  }
}
const catalog = buildCatalog(await readPublicSources(repoRoot));
for (const doc of catalog.docs.values()) {
  const file = `${doc.route}/index.html`;
  if (!htmlFiles.has(file)) throw new Error(`Missing source page: ${doc.path}`);
  for (const heading of doc.headings) if (!ids.get(file).has(heading.slug)) throw new Error(`Lost source anchor: ${doc.path}#${heading.slug}`);
  if (!htmlFiles.get(file).includes(`/edit/main/${doc.path}`)) throw new Error(`Incorrect edit link: ${doc.path}`);
  if (doc.route.startsWith('docs/') && !htmlFiles.get('security/index.html').includes(`${base}/${doc.route}/`)) throw new Error(`Missing generated sidebar entry: ${doc.path}`);
}
for (const asset of assets) if (!all.has(asset)) throw new Error(`Missing public asset: ${asset}`);

// The explorer must present exactly the derived public records, not a second manually maintained catalog.
const explorer = htmlFiles.get('explore/index.html');
if (!explorer) throw new Error('Missing capability explorer');
const publicRecords = catalog.records.filter(record => record.type !== 'reference');
const cardTags = [...explorer.matchAll(/<article\b[^>]*\bdata-type="([^"]*)"[^>]*>/g)];
if (cardTags.length !== publicRecords.length) throw new Error('Explorer card count differs from canonical records');
const typeCounts = new Map();
for (const [, type] of cardTags) typeCounts.set(type, (typeCounts.get(type) ?? 0) + 1);
for (const type of new Set(publicRecords.map(record => record.type))) {
  const expected = publicRecords.filter(record => record.type === type).length;
  if (typeCounts.get(type) !== expected) throw new Error('Explorer type mismatch: ' + type);
}
for (const id of ['query','type','solution','domain','share','count','empty']) {
  if (!ids.get('explore/index.html').has(id)) throw new Error('Explorer missing control ' + id);
}
if (!explorer.includes('Copy filtered link') || !explorer.includes('No records match these filters')) {
  throw new Error('Explorer lost sharing or no-results guidance');
}
const htmlCount = htmlFiles.size;
if (!all.has('pagefind/pagefind.js')) throw new Error('Missing Pagefind search bundle');
console.log(JSON.stringify({ sourcePages: documents.length, htmlPages: htmlCount, checkedLocalLinksAndResources: checked, sourceAnchorsPreserved: true, searchBundle: true }, null, 2));
