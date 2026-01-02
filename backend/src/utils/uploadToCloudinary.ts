import cloudinary from "../config/cloudinary";

export const uploadToCloudinary = (
  buffer: Buffer,
  mimetype: string,
  folder = "prompts"
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: "image",
      },
      (error, result) => {
        if (error) {
          console.error("❌ Cloudinary upload error:", error);
          return reject(error);
        }

        if (!result?.secure_url) {
          return reject(new Error("No secure_url returned from Cloudinary"));
        }

        resolve(result.secure_url);
      }
    );

    // 🔥 THIS LINE IS CRITICAL
    stream.end(buffer);
  });
};
