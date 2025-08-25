import { ExampleSchemaType } from "@/business/schemas/ExampleSchema";
import { exampleRepository } from "../repositories";

export class ExampleServerService {
  async createExample(data: ExampleSchemaType) {
    return await exampleRepository.createExample(data);
  }
}
