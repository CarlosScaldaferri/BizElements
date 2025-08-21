import { ApiCreated } from "@/lib/types/api";
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
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}
