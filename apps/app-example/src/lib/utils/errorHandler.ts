import { ApiError } from "../types/api";
import { AppError } from "../errors/AppError";
import { ERROR_CODES } from "../errors/errorCodes";
import { NextResponse } from "next/server";

export function handleApiError(error: unknown): NextResponse<ApiError> {
  console.error("API Error:", error);

  // Primeiro, verificar se é um erro customizado da aplicação
  if (error instanceof AppError) {
    return NextResponse.json<ApiError>(
      {
        success: false,
        error: {
          message: error.message,
          code: error.code,
        },
      },
      { status: error.statusCode }
    );
  }

  // Depois, verificar erros do Prisma
  type PrismaError = { code: string; message: string };
  if (error && typeof error === "object" && "code" in error) {
    const prismaError = error as PrismaError;

    // P1001 = Can't reach database server
    if (prismaError.code === "P1001") {
      return NextResponse.json<ApiError>(
        {
          success: false,
          error: {
            message: "Service temporarily unavailable",
            code: "SERVICE_UNAVAILABLE",
          },
        },
        { status: 503 }
      );
    }
  }

  // Erro genérico para qualquer outra situação
  return NextResponse.json<ApiError>(
    {
      success: false,
      error: {
        message: "Erro interno do servidor",
        code: ERROR_CODES.INTERNAL_SERVER_ERROR,
      },
    },
    { status: 500 }
  );
}
