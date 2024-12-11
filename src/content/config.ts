import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    photoAuthor: z.string().optional(),
  }),
});

const organization = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    type: z.string(), // Allows flexibility for different organization types
    workHours: z.string(),
    phone: z.string(),
    contact: z.string(),
    description: z.string(),
    heroImage: z.string().optional(),
  }),
});

export const collections = { blog, organization };
