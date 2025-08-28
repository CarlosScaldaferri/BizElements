import { NextRequest, NextResponse } from "next/server";
import UserRegistrationSchema from "@/business/schemas/UserRegistrationSchema";
import { userServerService } from "@/lib/services";
import { ApiCreated } from "@/lib/types/api";
import { validateRequest } from "@/lib/utils/validateRequest";
import { handleApiError } from "@/lib/utils/errorHandler";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validar os dados de entrada
    const data = validateRequest(UserRegistrationSchema, body);
    const validatedData = data;

    const userRegistration = await userServerService.createUser(validatedData);

    // Return success response
    return NextResponse.json<ApiCreated>(
      {
        success: true,
        id: userRegistration.id,
        createdAt: userRegistration.createdAt,
      },
      { status: 201 }
    );
  } catch (error) {
    return handleApiError(error);
  }
}
