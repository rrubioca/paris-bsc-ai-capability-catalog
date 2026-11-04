import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { buildCatalog, editUrl, portalMarkdown, readPublicSources } from './content.mjs';

export const repoRoot = fileURLToPath(new URL('../../../', import.meta.url));

function watchSources(context, catalog, sync) {
  if (!context.watcher) return;
  const files = [...catalog.sources.keys()].map(file => path.resolve(repoRoot, file));
  context.watcher.add(files);
  context.watcher.on('change', async file => {
    if (!files.includes(path.resolve(file))) return;
    try { await sync(); } catch (error) { context.logger.error(error.message); }
  });
}

export function recordsLoader() {
  return {
    name: 'paris-bsc-derived-records',
    async load(context) {
      const sync = async () => {
        const catalog = buildCatalog(await readPublicSources(repoRoot));
        context.store.clear();
        for (const record of catalog.records) {
          const data = await context.parseData({ id: record.id, data: record });
          context.store.set({ id: record.id, data, digest: context.generateDigest(record) });
        }
        return catalog;
      };
      watchSources(context, await sync(), sync);
    }
  };
}

export function catalogLoader() {
  return {
    name: 'paris-bsc-public-markdown',
    async load(context) {
      const sync = async () => {
        const catalog = buildCatalog(await readPublicSources(repoRoot));
        context.store.clear();
        for (const doc of catalog.docs.values()) {
          const body = portalMarkdown(doc, catalog);
          const data = await context.parseData({ id: doc.route, data: {
            title: doc.title,
            editUrl: editUrl(doc),
            sourcePath: doc.path,
            audience: doc.audience,
            pagefind: true
          } });
          context.store.set({
            id: doc.route, data, body,
            digest: context.generateDigest(body),
            rendered: await context.renderMarkdown(body)
          });
        }
        return catalog;
      };
      watchSources(context, await sync(), sync);
    }
  };
}
