import { ApiCreated, ApiError } from "@/lib/types/api";
import { UserRegistrationSchemaType } from "@/business/schemas/UserRegistrationSchema";
import axios from "axios";

export async function postUserRegistration(
  data: UserRegistrationSchemaType
): Promise<ApiCreated> {
  try {
    const response = await axios.post<ApiCreated>(
      "/api/user-registration",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
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
