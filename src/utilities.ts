import sharp from 'sharp';

export const resizeImage = async (
  imagePath: string,
  processedImagePath: string,
  hieght: number,
  width: number
): Promise<void> | never => {
  await sharp(imagePath).resize(hieght, width).toFile(processedImagePath);
};
