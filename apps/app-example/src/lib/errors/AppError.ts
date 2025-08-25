export class AppError extends Error {
  public readonly code: string;
  public readonly statusCode: number;
  public readonly details?: unknown;

  constructor(
    message: string,
    code: string,
    statusCode: number = 500,
    details?: unknown
  ) {
    super(message);
    this.name = "AppError";
    this.code = code;
    this.statusCode = statusCode;
    this.details = details;

    // Manter o stack trace correto (V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AppError);
    }
  }

  static emailExists(): AppError {
    return new AppError("Email is already in use", "EMAIL_EXISTS", 409);
  }

  static validationError(
    message = "Invalid data provided",
    details?: unknown
  ): AppError {
    return new AppError(message, "VALIDATION_ERROR", 400, details);
  }

  static serviceUnavailable(): AppError {
    return new AppError(
      "Service temporarily unavailable",
      "SERVICE_UNAVAILABLE",
      503
    );
  }
}
