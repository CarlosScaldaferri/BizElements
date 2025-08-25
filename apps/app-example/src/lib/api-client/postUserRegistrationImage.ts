import { ApiCreated } from "@/lib/types/api";
import { UserRegistrationImageSchemaType } from "@/business/schemas/UserRegistrationImageSchema";
import axios from "axios";

export async function postUserRegistrationImage(
  data: UserRegistrationImageSchemaType
): Promise<ApiCreated> {
  const formData = new FormData();

  // Type guards
  const isFile = (value: unknown): value is File => value instanceof File;
  const isDate = (value: unknown): value is Date => value instanceof Date;

  Object.entries(data).forEach(([key, value]) => {
    if (value == null) return;

    if (isFile(value)) {
      formData.append(key, value);
    } else if (isDate(value)) {
      formData.append(key, value.toISOString());
    } else if (Array.isArray(value)) {
      value.forEach((item, index) => {
        if (isFile(item)) {
          formData.append(`${key}[${index}]`, item);
        } else {
          formData.append(`${key}[${index}]`, String(item));
        }
      });
    } else {
      formData.append(
        key,
        typeof value === "object" ? JSON.stringify(value) : String(value)
      );
    }
  });

  try {
    const response = await axios.post<ApiCreated>(
      "/api/user-registration-image",
      formData,
      {
        // NÃO definir Content-Type manualmente quando usando FormData
        // O axios/browser define automaticamente como multipart/form-data
      }
    );

    return response.data;
  } catch (error: any) {
    // Handle axios error
    if (error.response) {
      const errorData = error.response.data;
      const errorMessage =
        errorData?.error?.message ||
        `HTTP error! status: ${error.response.status}`;
      throw new Error(errorMessage);
    }

    // Handle other errors
    throw new Error(
      error instanceof Error ? error.message : "An unexpected error occurred"
    );
  }
}
