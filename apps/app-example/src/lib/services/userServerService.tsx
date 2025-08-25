import { UserRegistrationSchemaType } from "@/business/schemas/UserRegistrationSchema";
import { userRepository } from "../repositories";
import { AppError } from "../errors/AppError";

export class UserServerService {
  async createUser(data: UserRegistrationSchemaType) {
    const mailExists = await userRepository.userEmailExists(data.email);
    if (mailExists) {
      throw AppError.emailExists();
    }
    return userRepository.createUser(data);
  }
}
