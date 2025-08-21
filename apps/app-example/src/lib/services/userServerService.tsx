import prisma from "../db/prisma";
import { UserRegistrationSchemaType } from "@/business/schemas/UserRegistrationSchema";

export class UserServerService {
  constructor() {
    // Initialize any dependencies or configurations here if needed
  }

  async createUser(userData: UserRegistrationSchemaType) {
    // Validação dos campos obrigatórios conforme UserRegistrationSchema
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "dateOfBirth",
      "gender",
      "country",
      "bio",
      "receiveNewsletter",
      "receivePromotions",
      "emailNotifications",
      "smsNotifications",
    ];
    for (const field of requiredFields) {
      if (
        userData[field as keyof UserRegistrationSchemaType] === undefined ||
        userData[field as keyof UserRegistrationSchemaType] === null ||
        (typeof userData[field as keyof UserRegistrationSchemaType] ===
          "string" &&
          userData[field as keyof UserRegistrationSchemaType] === "")
      ) {
        throw new Error(`The required field '${field}' is missing.`);
      }
    }

    // Convert dateOfBirth string to Date object
    const dateOfBirth = new Date(userData.dateOfBirth);

    // Check if date is valid
    if (isNaN(dateOfBirth.getTime())) {
      throw new Error("Invalid date of birth format. Please use a valid date.");
    }

    // Save to database using Prisma
    const userRegistration = await prisma.userRegistration.create({
      data: {
        avatarUrl: userData.avatarUrl || null,
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        dateOfBirth: dateOfBirth,
        gender: userData.gender,
        country: userData.country,
        bio: userData.bio,
        receiveNewsletter: userData.receiveNewsletter,
        receivePromotions: userData.receivePromotions,
        emailNotifications: userData.emailNotifications,
        smsNotifications: userData.smsNotifications,
      },
    });

    await prisma.$disconnect();

    // Example implementation: return a JSON response with the user data
    return { id: userRegistration.id, createdAt: userRegistration.createdAt };
  }
}
