import { NextRequest, NextResponse } from "next/server";
import UserRegistrationImageSchema from "@/business/schemas/UserRegistrationImageSchema";
import { userServerService } from "@/lib/services";
import { ApiCreated } from "@/lib/types/api";
import { handleApiError } from "@/lib/utils/errorHandler";
import { validateRequest as parseAndValidate } from "@/lib/utils/validateRequest";
import { formDataToObject } from "@/lib/utils/utils";

export async function POST(request: NextRequest) {
  try {
    // Receber o FormData
    const formData = await request.formData();

    //convertendo o formData em objeto
    const userData = formDataToObject(formData);

    // Validar os dados de entrada
    const validatedData = parseAndValidate(
      UserRegistrationImageSchema,
      userData
    );

    const userRegistration =
      await userServerService.createUserWithImage(validatedData);

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
