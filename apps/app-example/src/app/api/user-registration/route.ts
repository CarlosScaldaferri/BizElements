import { NextRequest, NextResponse } from "next/server";
import UserRegistrationSchema from "@/business/schemas/UserRegistrationSchema";
import { userServerService } from "@/lib/services";
import { ApiCreated, ApiError } from "@/lib/types/api";

export async function POST(request: NextRequest) {
  const body = await request.json();

  // Validate the request body against our schema
  const validationResult = UserRegistrationSchema.safeParse(body);

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
  const userRegistration = await userServerService.createUser(validatedData);

  // Return success response
  return NextResponse.json<ApiCreated>({
    success: true,
    id: userRegistration.id,
    createdAt: userRegistration.createdAt,
  });
}
