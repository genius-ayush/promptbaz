import cloudinary from "../config/cloudinary";

export const uploadToCloudinary = async (
  buffer: Buffer,
  mimetype: string,
  folder = "prompts"
): Promise<string> => {
  const b64 = Buffer.from(buffer).toString("base64");
  const dataURI = "data:" + mimetype + ";base64," + b64;

  const result = await cloudinary.uploader.upload(dataURI, {
    folder: folder,
  });

  return result.secure_url;
};
