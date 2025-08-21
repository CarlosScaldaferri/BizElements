import { generalServerService } from "@/lib/services";
import { NextRequest, NextResponse } from "next/server";
import ExampleSchema from "@/business/schemas/ExampleSchema";
import { ApiError, ApiCreated } from "@/lib/types/api";

export async function POST(request: NextRequest) {
  // Extrair dados do corpo da requisição
  const body = await request.json();

  // Validar dados com o schema Zod
  const validationResult = ExampleSchema.safeParse(body);

  if (!validationResult.success) {
    const errorMessages = validationResult.error.issues
      .map((issue) => `${issue.path.join(".")}: ${issue.message}`)
      .join(", ");

    return NextResponse.json<ApiError>(
      {
        success: false,
        error: {
          message: `Dados inválidos: ${errorMessages}`,
          code: "VALIDATION_ERROR",
          details: validationResult.error.issues,
        },
      },
      { status: 400 }
    );
  }

  const validatedData = validationResult.data;

  // Chamar o service para criar o exemplo
  const example = await generalServerService.createExample(validatedData);

  // Retornar no formato ApiResponse<TExample> esperado pelo frontend
  return NextResponse.json<ApiCreated>(
    {
      success: true,
      id: example.id,
      createdAt: example.createdAt,
    },
    { status: 201 }
  );
}
