import { NextRequest, NextResponse } from "next/server";
import UserRegistrationImageSchema from "@/business/schemas/UserRegistrationImageSchema";
import { userServerService } from "@/lib/services";
import { ApiCreated } from "@/lib/types/api";
import { handleApiError } from "@/lib/utils/errorHandler";
import { validateRequest } from "@/lib/utils/validateRequest";

export async function POST(request: NextRequest) {
  try {
    // Receber o FormData
    const formData = await request.formData();

    // Extrair o arquivo
    const avatar = formData.get("avatar") as File | null;

    // Extrair os outros campos
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const dateOfBirth = formData.get("dateOfBirth") as string;
    const gender = formData.get("gender") as string;
    const country = formData.get("country") as string;
    const bio = formData.get("bio") as string;
    const receiveNewsletter = formData.get("receiveNewsletter") === "true";
    const receivePromotions = formData.get("receivePromotions") === "true";
    const emailNotifications = formData.get("emailNotifications") === "true";
    const smsNotifications = formData.get("smsNotifications") === "true";

    // Criar objeto para validação (sem o arquivo por enquanto)
    const userData = {
      avatar,
      firstName,
      lastName,
      email,
      dateOfBirth,
      gender: gender || undefined,
      country,
      bio,
      receiveNewsletter,
      receivePromotions,
      emailNotifications,
      smsNotifications,
    };

    // Validar os dados de entrada
    const { data } = validateRequest(UserRegistrationImageSchema, userData);
    const validatedData = data;

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
