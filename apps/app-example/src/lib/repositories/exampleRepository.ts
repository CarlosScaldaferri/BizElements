import { ExampleSchemaType } from "@/business/schemas/ExampleSchema";
import prisma from "../db/prisma";

export class ExampleRepository {
  constructor() {
    // Initialize any dependencies or configurations here if needed
  }

  async createExample(userData: ExampleSchemaType) {
    // Prisma insert na tabela Example
    const newExample = await prisma.example.create({
      data: {
        bizInputValue: userData.simpleInput,
      },
    });
    await prisma.$disconnect();

    // Example implementation: return a JSON response with the user data
    return { id: newExample.id, createdAt: newExample.createdAt };
  }
}
