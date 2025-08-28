import prisma from "../db/prisma";
import { UserRegistrationSchemaType } from "@/business/schemas/UserRegistrationSchema";

export class UserRepository {
  constructor() {
    // Initialize any dependencies or configurations here if needed
  }

  async userEmailExists(email: string) {
    const user = await prisma.userRegistration.findUnique({
      where: { email: email },
    });
    return !!user;
  }

  async updateUserImageUrl(id: string, url: string) {
    const userRegistration = await prisma.userRegistration.update({
      where: { id: id },
      data: { avatarUrl: url },
    });

    return { id: userRegistration.id, updatedAt: userRegistration.updatedAt };
  }

  async createUser(userData: UserRegistrationSchemaType) {
    // Convert dateOfBirth string to Date object
    const dateOfBirth = new Date(userData.dateOfBirth);

    // Check if date is valid
    if (isNaN(dateOfBirth.getTime())) {
      throw new Error("Invalid date of birth format. Please use a valid date.");
    }
    // Save to database using Prisma
    const userRegistration = await prisma.userRegistration.create({
      data: {
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
    // Example implementation: return a JSON response with the user data
    return { id: userRegistration.id, createdAt: userRegistration.createdAt };
  }
}
