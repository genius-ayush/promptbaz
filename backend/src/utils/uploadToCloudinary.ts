import cloudinary from "../config/cloudinary";

export const uploadToCloudinary = (
  buffer: Buffer,
  folder = "prompts"
): Promise<string> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({ folder }, (error, result) => {
        if (error || !result) return reject(error);
        resolve(result.secure_url);
      })
      .end(buffer);
  });
};
