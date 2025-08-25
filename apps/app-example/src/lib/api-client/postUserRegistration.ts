import { ApiCreated, ApiError } from "@/lib/types/api";
import { UserRegistrationSchemaType } from "@/business/schemas/UserRegistrationSchema";

export async function postUserRegistration(
  data: UserRegistrationSchemaType
): Promise<ApiCreated> {
  const response = await fetch("/api/user-registration", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    // Try to extract error message from response body
    let errorMessage = `HTTP error! status: ${response.status}`;

    try {
      const errorData = await response.json();
      if (errorData.error.message) {
        errorMessage = errorData.error.message;
      }
    } catch {
      // If we can't parse JSON, keep the generic error message
    }

    throw new Error(errorMessage);
  }

  return response.json();
}
