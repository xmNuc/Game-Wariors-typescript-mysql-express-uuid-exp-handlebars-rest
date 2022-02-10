import { Router } from 'express';

export const hallOffFameRouter = Router();

hallOffFameRouter.get('/', (req, res) => {
  res.send('Best fighter list');
});
