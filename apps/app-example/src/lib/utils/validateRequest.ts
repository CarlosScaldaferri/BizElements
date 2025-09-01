import { ZodSchema } from "zod";
import { AppError } from "../errors/AppError";
import { ERROR_CODES } from "../errors/errorCodes";

export function validateRequest<T>(schema: ZodSchema<T>, body: unknown) {
  const validationResult = schema.safeParse(body);

  if (!validationResult.success) {
    const errorMessages = validationResult.error.issues
      .map((issue) => `${issue.path.join(".")}: ${issue.message}`)
      .join(", ");

    throw AppError.validationError(
      `Dados inválidos: ${errorMessages}`,
      ERROR_CODES.VALIDATION_SCHEMA_ERROR
    );
  }

  return validationResult.data;
}
