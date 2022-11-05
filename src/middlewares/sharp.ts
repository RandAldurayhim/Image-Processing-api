import sharp from 'sharp';
import { Request, Response } from 'express';
import path from 'path';

export const resizeImageAndSave = async (
  req: Request,
  res: Response
): Promise<Response<string>> => {
  const imagePath = path.join(
    __dirname,
    '../../../Image-Processing-api/assets/full',
    `${req.query.fileName}.jpg`
  );
  const processedImageFileName = `${req.query.fileName}-${req.query.hieght}-${req.query.width}.jpg`;
  const processedImagePath = path.join(
    __dirname,
    '../../../Image-Processing-api/assets/thumb',
    processedImageFileName
  );
  const hieght: number = parseInt(req.query.hieght as string);
  const width: number = parseInt(req.query.width as string);
  await sharp(imagePath).resize(hieght, width).toFile(processedImagePath);
  return res
    .status(200)
    .send(`<img src= "/thumb/${processedImageFileName}" />`);
};
