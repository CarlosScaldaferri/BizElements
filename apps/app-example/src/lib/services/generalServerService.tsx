import { ExampleSchemaType } from "@/business/schemas/ExampleSchema";
import { NextResponse } from "next/server";

import prisma from "../db/prisma";

export class GeneralServerService {
  constructor() {
    // Initialize any dependencies or configurations here if needed
  }

  async createExample(userData: ExampleSchemaType): Promise<NextResponse> {
    if (!userData.simpleInput) {
      throw new Error("The field 'simpleInput' is required.");
    }

    // Prisma insert na tabela Example
    const newExample = await prisma.example.create({
      data: {
        bizInputValue: userData.simpleInput,
      },
    });
    await prisma.$disconnect();

    // Example implementation: return a JSON response with the user data
    return NextResponse.json({ success: true, data: newExample });
  }
}
