import { ApiCreated } from "@/lib/types/api";
import { UserRegistrationImageSchemaType } from "@/business/schemas/UserRegistrationImageSchema";
import axios from "./axiosConfig"; // Usar o axios configurado
import { objectToFormData } from "../utils/utils";

export async function postUserRegistrationImage(
  data: UserRegistrationImageSchemaType
): Promise<ApiCreated> {
  const formData = objectToFormData(data);

  const response = await axios.post<ApiCreated>(
    "/api/user-registration-image",
    formData
  );

  return response.data;
}
