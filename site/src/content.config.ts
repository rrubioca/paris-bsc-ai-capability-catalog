import { defineCollection } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';
import { z } from 'zod';
import { catalogLoader, recordsLoader } from './lib/catalog-loader.mjs';
import { recordSchema } from './lib/content.mjs';

export const collections = {
  catalog: defineCollection({ loader: recordsLoader(), schema: recordSchema }),
  docs: defineCollection({
    loader: catalogLoader(),
    schema: docsSchema({ extend: z.object({ sourcePath: z.string(), audience: z.string() }) })
  })
};
