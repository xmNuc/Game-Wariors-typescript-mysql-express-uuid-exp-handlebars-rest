import { Router } from 'express';

export const hallOfFameRouter = Router();

hallOfFameRouter.get('/', (req, res) => {
  res.render('hall-of-fame/list');
});
