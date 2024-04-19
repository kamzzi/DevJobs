import { z } from "zod";

export const JobSchema = z.object({
  id: z.number(),
  company: z.string(),
  logo: z.string(),
  logoBackground: z.string(),
  position: z.string(),
  postedAt: z.string(),
  contract: z.string(),
  location: z.string(),
  website: z.string(),
  apply: z.string(),
  description: z.string(),
  requirements: z.object({
    content: z.string(),
    items: z.array(z.string()),
  }),
  role: z.object({
    content: z.string(),
    items: z.array(z.string()),
  }),
});

export const JobsSchema = z.array(JobSchema);

export type JobSchemaType = z.infer<typeof JobSchema>;

export type JobsSchemaType = z.infer<typeof JobsSchema>;
