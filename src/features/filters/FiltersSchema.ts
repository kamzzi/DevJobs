import z from "zod";

export const FiltersSchema = z.object({
  title: z.string(),
  location: z.string(),
  // fullTime: z.boolean(),
});

export type FiltersSchemaType = z.infer<typeof FiltersSchema>;
