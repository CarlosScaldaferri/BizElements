import { z } from "zod";

const ExampleSchema = z.object({
  simpleImput: z.string().min(2, "Simple input must be least 2 characteres."),
});
export type ExampleSchemaType = z.infer<typeof ExampleSchema>;
export default ExampleSchema;

