import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import path from 'path';

export const validateHieght = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response<string> | void> => {
  const hieght: number = req.query.hieght as unknown as number;
  if (!hieght) {
    return res.status(400).send('Hieght is a required query parameter!');
  } else if (isNaN(hieght)) {
    return res.status(400).send('Hieght must be a valid number!');
  } else if (hieght <= 0) {
    return res.status(400).send('Hieght must be a number > 0 !');
  } else {
    return next();
  }
};

export const validateWidth = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response<string> | void> => {
  const width: number = req.query.width as unknown as number;
  if (!width) {
    return res.status(400).send('width is a required query parameter!');
  } else if (isNaN(width)) {
    return res.status(400).send('width must be a valid number!');
  } else if (width <= 0) {
    return res.status(400).send('width must be a number > 0 !');
  } else {
    return next();
  }
};

export const validateFileName = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response<string> | void> => {
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
  if (!req.query.fileName) {
    return res.status(400).send('fileName is a required query parameter!');
  } else if (!fs.existsSync(imagePath)) {
    //image do not exists
    return res.status(404).send('Image file was not found!');
  } else if (fs.existsSync(processedImagePath)) {
    //image already proccesed
    return res
      .status(200)
      .send(`<img src="/thumb/${processedImageFileName}" />`);
  } else {
    // send to process
    next();
  }
};
