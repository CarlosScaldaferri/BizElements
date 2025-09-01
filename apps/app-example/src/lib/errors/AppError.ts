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

  static validationError(
    message = "Invalid data provided",
    code = "VALIDATION_ERROR",
    details?: unknown
  ): AppError {
    return new AppError(message, code, 400, details);
  }

  static uploadServerError(
    message = "Error uploading file",
    code = "UPLOAD_ERROR",
    details?: unknown
  ): AppError {
    return new AppError(message, code, 400, details);
  }

  static serviceUnavailable(): AppError {
    return new AppError(
      "Service temporarily unavailable",
      "SERVICE_UNAVAILABLE",
      503
    );
  }
}
