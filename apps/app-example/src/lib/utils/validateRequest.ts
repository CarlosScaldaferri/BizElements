import { ZodSchema } from "zod";
import { AppError } from "../errors/AppError";

export function validateRequest<T>(schema: ZodSchema<T>, body: unknown) {
  const validationResult = schema.safeParse(body);

  if (!validationResult.success) {
    const errorMessages = validationResult.error.issues
      .map((issue) => `${issue.path.join(".")}: ${issue.message}`)
      .join(", ");

    throw AppError.validationError(
      `Dados inválidos: ${errorMessages}`,
      validationResult.error.issues
    );
  }

  return { data: validationResult.data };
}
