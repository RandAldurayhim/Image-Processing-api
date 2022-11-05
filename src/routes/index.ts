import express from 'express';
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

routes.get('*', async (req: express.Request, res: express.Response) => {
  res.status(404);
  res.send(`Page is not Found`);
});

export default routes;
