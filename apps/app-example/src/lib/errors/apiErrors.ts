export class ApiError extends Error {
  public readonly statusCode: number;
  public readonly code?: string; // Código de erro específico da aplicação
  public readonly details?: unknown; // Detalhes adicionais (ex: campos com erro)

  constructor(
    message: string,
    statusCode: number,
    code?: string,
    details?: unknown
  ) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
    this.details = details;
  }
}

export class InvalidJsonError extends ApiError {
  constructor(
    details?: unknown,
    message: string = "Corpo da requisição inválido (não é multipart/form-data?)",
    code: string = "INVALID_JSON_ERROR"
  ) {
    super(
      message,
      500,
      code,
      details && typeof details === "object" && !Array.isArray(details)
        ? { ...details }
        : details
    );
  }
}

export class ValidationError extends ApiError {
  constructor(
    message: string = "Erro de validação",
    details?: unknown,
    code: string = "VALIDATION_ERROR"
  ) {
    super(
      message,
      400,
      code,
      details && typeof details === "object" && !Array.isArray(details)
        ? { ...details }
        : details
    );
  }
}

export class UnexpectedError extends ApiError {
  constructor(
    message: string = "Erro inesperado",
    details?: unknown,
    code: string = "UNEXPECTED_ERROR"
  ) {
    super(
      message,
      500,
      code,
      details && typeof details === "object" && !Array.isArray(details)
        ? { ...details }
        : details
    ); // 500 Internal Server Error
    Object.setPrototypeOf(this, UnexpectedError.prototype);
  }
}
