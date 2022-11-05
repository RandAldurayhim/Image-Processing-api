import express, { Response, Request } from 'express';
import {
  validateFileName,
  validateHieght,
  validateWidth,
} from '../middlewares/validation';
import { resizeImageAndSave } from '../middlewares/sharp';
const routes = express.Router();

routes.get(
  '/api/images',
  validateHieght,
  validateWidth,
  validateFileName,
  resizeImageAndSave
);

routes.get('*', (req:Request,res: Response) => {
  return res.status(404).send('Page is not Found');
});

export default routes;
