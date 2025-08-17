import { z } from "zod";

const ExampleSchema = z.object({
  simpleInput: z
    .string()
    .min(2, "Please enter at least 2 characters")
    .max(100, "Maximum 100 characters allowed")
    .trim(),
});

export type ExampleSchemaType = z.infer<typeof ExampleSchema>;
export default ExampleSchema;
