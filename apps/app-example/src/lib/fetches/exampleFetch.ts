import axios from "axios";
import { ExampleSchemaType } from "@/business/schemas/ExampleSchema";

export type RegisterExampleSuccessData = { userId: string };

export async function registerExample(
  data: ExampleSchemaType
): Promise<RegisterExampleSuccessData> {
  const formData = new FormData();

  // Type guards
  const isFile = (value: unknown): value is File => {
    return value instanceof File;
  };

  const isDate = (value: unknown): value is Date => {
    return value instanceof Date;
  };

  Object.entries(data).forEach(([key, value]) => {
    if (value == null) return;

    if (isFile(value)) {
      formData.append(key, value);
    } else if (isDate(value)) {
      formData.append(key, value.toISOString());
    } else {
      formData.append(
        key,
        typeof value === "object" ? JSON.stringify(value) : String(value)
      );
    }
  });

  try {
    const response = await axios.post("/api/example/register", formData);
    return response.data as RegisterExampleSuccessData;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorPayload = error.response?.data?.error || {
        message: "Erro desconhecido no registro",
        code: "UNKNOWN_CLIENT_ERROR",
      };
      throw new Error(`${errorPayload.message} (${errorPayload.code})`);
    }
    throw error;
  }
}
