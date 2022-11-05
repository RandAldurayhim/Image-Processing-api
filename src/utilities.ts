import sharp from 'sharp';

export const resizeImage = async (
  imagePath: string,
  processedImagePath: string,
  hieght: number,
  width: number
) => {
  await sharp(imagePath).resize(hieght, width).toFile(processedImagePath);
};
