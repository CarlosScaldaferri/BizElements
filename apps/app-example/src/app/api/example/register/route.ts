import { exampleServerService } from "@/lib/services";
import { NextRequest, NextResponse } from "next/server";
import ExampleSchema from "@/business/schemas/ExampleSchema";
import { ApiCreated } from "@/lib/types/api";
import { validateRequest } from "@/lib/utils/validateRequest";

export async function POST(request: NextRequest) {
  // Extrair dados do corpo da requisição
  const body = await request.json();

  const { data } = validateRequest(ExampleSchema, body);
  const validatedData = data;

  // Chamar o service para criar o exemplo
  const example = await exampleServerService.createExample(validatedData);

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
