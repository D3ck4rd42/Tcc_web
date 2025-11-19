import { z } from "zod";

export const pageSchema = z.object({
  slug: z
    .string()
    .min(2, "Le slug doit contenir au moins 2 caractères")
    .regex(/^[a-z0-9-]+$/, "Le slug ne peut contenir que des lettres minuscules, chiffres et tirets"),
  title: z.string().min(3, "Le titre doit contenir au moins 3 caractères"),
  content: z.string().min(10, "Le contenu doit contenir au moins 10 caractères"),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  published: z.boolean().default(true),
  order: z.number().int().min(0).default(0),
});

export type PageFormData = z.infer<typeof pageSchema>;
