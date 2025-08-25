import { NextResponse } from "next/server";
import { AppError } from "../errors/AppError";

type UploadApiResponse = any;
type UploadApiErrorResponse = any;

export class GeneralServerService {
  constructor() {
    // Initialize any dependencies or configurations here if needed
  }

  async uploadFile(file: File): Promise<NextResponse> {
    // return NextResponse.json({ success: true, url: "teste" }, { status: 200 });
    let cloudinary;
    try {
      const cloudinaryModule = await import("cloudinary");
      cloudinary = cloudinaryModule.v2;

      if (
        !process.env.CLOUDINARY_CLOUD_NAME ||
        !process.env.CLOUDINARY_API_KEY ||
        !process.env.CLOUDINARY_API_SECRET
      ) {
        throw new Error("Variáveis de ambiente do Cloudinary ausentes!");
      }
      cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
        secure: true,
      });
    } catch (error: any) {
      throw AppError.uploadServerError(error.message);
    }

    try {
      const fileBuffer = await file.arrayBuffer();

      const buffer = Buffer.from(fileBuffer);

      const uploadResult = await new Promise<UploadApiResponse>(
        (resolve, reject) => {
          const uploadStream = cloudinary.uploader.upload_stream(
            {},
            (
              error: UploadApiErrorResponse | undefined,
              result: UploadApiResponse | undefined
            ) => {
              if (error) {
                console.error("Cloudinary Upload Stream Error:", error);
                return reject(error);
              }
              if (!result) {
                return reject(
                  new Error(
                    "Cloudinary upload finished without error or result."
                  )
                );
              }
              resolve(result);
            }
          );

          uploadStream.end(buffer);
        }
      );

      return NextResponse.json(
        { success: true, url: uploadResult.secure_url },
        { status: 200 }
      );
    } catch (error: any) {
      throw AppError.uploadServerError(error.message);
    }
  }
}
