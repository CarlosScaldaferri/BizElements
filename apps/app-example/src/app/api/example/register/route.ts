import { generalServerService } from "@/lib/services";
import { NextRequest, NextResponse } from "next/server";
import ExampleSchema from "@/business/schemas/ExampleSchema";
import { ApiResponse, TApiCreated } from "@/lib/types/api";

export async function POST(request: NextRequest) {
  try {
    // Extrair dados do corpo da requisição
    const body = await request.json();

    // Validar dados com o schema Zod
    const validationResult = ExampleSchema.safeParse(body);

    if (!validationResult.success) {
      const errorMessages = validationResult.error.issues
        .map((issue) => `${issue.path.join(".")}: ${issue.message}`)
        .join(", ");

      return NextResponse.json<ApiResponse<never>>(
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
    const serviceResult =
      await generalServerService.createExample(validatedData);

    // O service retorna NextResponse, precisamos extrair os dados
    const serviceData = await serviceResult.json();

    // Retornar no formato ApiResponse<TExample> esperado pelo frontend
    return NextResponse.json<ApiResponse<TApiCreated>>(
      {
        success: true,
        data: serviceData.data as TApiCreated,
        message: "Exemplo criado com sucesso!",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erro no endpoint POST /api/example/register:", error);

    return NextResponse.json<ApiResponse<never>>(
      {
        success: false,
        error: {
          message:
            error instanceof Error ? error.message : "Erro interno do servidor",
          code: "INTERNAL_ERROR",
        },
      },
      { status: 500 }
    );
  }
}
