import { z } from "zod";

export const newsPostSchema = z.object({
  title: z.string().min(5, "Le titre doit contenir au moins 5 caractères"),
  slug: z
    .string()
    .min(3, "Le slug doit contenir au moins 3 caractères")
    .regex(/^[a-z0-9-]+$/, "Le slug ne peut contenir que des lettres minuscules, chiffres et tirets"),
  excerpt: z.string().optional(),
  content: z.string().min(10, "Le contenu doit contenir au moins 10 caractères"),
  featuredImage: z.string().url().optional().or(z.literal("")),
  status: z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]),
  publishedAt: z.string().datetime().optional().or(z.literal("")),
});

export type NewsPostFormData = z.infer<typeof newsPostSchema>;
