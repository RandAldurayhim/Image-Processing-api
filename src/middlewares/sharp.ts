import { Request, Response } from 'express';
import path from 'path';
import { resizeImage } from '../utilities';

export const resizeImageAndSave = async (
  req: Request,
  res: Response
): Promise<Response<string>> => {
  const imagePath = path.join(
    __dirname,
    '../../assets/full',
    `${req.query.fileName}.jpg`
  );
  const processedImageFileName = `${req.query.fileName}-${req.query.hieght}-${req.query.width}.jpg`;
  const processedImagePath = path.join(
    __dirname,
    '../../assets/thumb',
    processedImageFileName
  );
  const hieght: number = parseInt(req.query.hieght as string);
  const width: number = parseInt(req.query.width as string);
  await resizeImage(imagePath, processedImagePath, hieght, width);
  return res
    .status(200)
    .send(`<img src= "/thumb/${processedImageFileName}" />`);
};
