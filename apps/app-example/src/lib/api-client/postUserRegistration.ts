import { ApiCreated } from "@/lib/types/api";
import { UserRegistrationSchemaType } from "@/business/schemas/UserRegistrationSchema";
import axios from "./axiosConfig";

export async function postUserRegistration(
  data: UserRegistrationSchemaType
): Promise<ApiCreated> {
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
}
