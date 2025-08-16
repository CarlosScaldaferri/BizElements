import { ExampleSchemaType } from "@/business/schemas/ExampleSchema";
import { NextResponse } from "next/server";
import { ValidationError } from "../errors/apiErrors";

import prisma from "../db/prisma";

export class GeneralServerService {
  constructor() {
    // Initialize any dependencies or configurations here if needed
  }

  async createExample(userData: ExampleSchemaType): Promise<NextResponse> {
    if (!userData.simpleImput) {
      throw new ValidationError("Simple input is required.");
    }

    // Prisma insert na tabela Example
    await prisma.example.create({
      data: {
        bizInputValue: userData.simpleImput,
      },
    });
    await prisma.$disconnect();

    // Example implementation: return a JSON response with the user data
    return NextResponse.json({ success: true, data: userData });
  }
}
