import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { rssSchema } from "@astrojs/rss";

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/data/blog" }),
  schema: rssSchema.extend({
    category: z.string().optional(),
    draft: z.boolean().optional().default(false),
    ogImage: z.string().optional(),
    keywords: z.string().optional(),
    heroImages: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
        }),
      )
      .optional(),
    tags: z.array(z.string()).optional(),
    hasTranslation: z.boolean().optional().default(false),
    titleEn: z.string().optional(),
    descriptionEn: z.string().optional(),
  }),
});

export const collections = { blog };
