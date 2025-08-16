import { NextRequest } from "next/server";
import ExampleSchema from "@/business/schemas/ExampleSchema";
import { generalServerService } from "@/lib/services";
import {
  ApiError,
  InvalidJsonError,
  UnexpectedError,
  ValidationError,
} from "@/lib/errors/apiErrors";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    //Resgatant el formdata
    let formData;
    try {
      formData = await request.formData();
    } catch (error) {
      throw new InvalidJsonError(
        error instanceof Error ? error.message : String(error)
      );
    }
    //construindo body e buscando a foto do user
    const body: Record<string, unknown> = {};
    for (const [key, value] of formData.entries()) {
      if (key === "picture") {
        if (value instanceof File) {
          body[key] = value;
        }
      } else if (key === "emails") {
        try {
          body[key] = JSON.parse(value as string);
        } catch {
          body[key] = value;
        }
      } else {
        body[key] = value;
      }
    }

    //Faz o parse do JSON com o schema zod
    const validationResult = ExampleSchema.safeParse(body);
    if (!validationResult.success) {
      throw new ValidationError(
        "Dados de entrada inválidos.",
        validationResult.error.flatten().fieldErrors
      );
    }
    const validatedData = validationResult.data;

    const response = await generalServerService.createExample(validatedData);
    const responseToReturnToClient = response.clone();
    const example = await response.json();

    if (!example.success) {
      throw new ApiError(
        example.error.message,
        response.status,
        example.error.code
      );
    }
    return responseToReturnToClient;
  } catch (error) {
    throw new UnexpectedError(
      error instanceof Error ? error.message : String(error)
    );
  }
}
