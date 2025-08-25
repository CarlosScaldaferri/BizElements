import { UserRegistrationSchemaType } from "@/business/schemas/UserRegistrationSchema";
import { userRepository } from "../repositories";
import { AppError } from "../errors/AppError";
import { UserRegistrationImageSchemaType } from "@/business/schemas/UserRegistrationImageSchema";
import { generalServerService } from ".";

export class UserServerService {
  async createUser(data: UserRegistrationSchemaType) {
    const mailExists = await userRepository.userEmailExists(data.email);
    if (mailExists) {
      throw AppError.emailExists();
    }
    return userRepository.createUser(data);
  }

  async createUserWithImage(data: UserRegistrationImageSchemaType) {
    const mailExists = await userRepository.userEmailExists(data.email);

    if (mailExists) {
      throw AppError.emailExists();
    }
  
    const createdUser = await userRepository.createUser(data);

    if (data.avatar) {
      const uploadResponse = await generalServerService.uploadFile(data.avatar);
      if (uploadResponse.ok) {
        const uploadData = await uploadResponse.json();
        if (uploadData.success) {
          await this.updateUserImageUrl(createdUser.id, uploadData.url);
        }
      }
    }
    return createdUser;
  }

  async updateUserImageUrl(id: string, url: string) {
    return userRepository.updateUserImageUrl(id, url);
  }
}
