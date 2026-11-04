import fs from 'node:fs/promises';
import { buildCatalog, readPublicSources } from '../src/lib/content.mjs';
import { repoRoot } from '../src/lib/catalog-loader.mjs';

const catalog = buildCatalog(await readPublicSources(repoRoot));
const counts = {};
for (const record of catalog.records) counts[record.type] = (counts[record.type] ?? 0) + 1;
const report = { documents: catalog.docs.size, assets: catalog.sources.size - catalog.docs.size, links: catalog.linkCount, records: counts };
await fs.mkdir(new URL('../.reports/', import.meta.url), { recursive: true });
await fs.writeFile(new URL('../.reports/catalog.json', import.meta.url), JSON.stringify({ ...report, records: catalog.records }, null, 2));
console.log(JSON.stringify(report, null, 2));
