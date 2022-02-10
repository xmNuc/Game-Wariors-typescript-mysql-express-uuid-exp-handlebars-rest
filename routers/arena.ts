import { Router } from 'express';

export const arenaRouter = Router();

arenaRouter
  .get('/fight-form', (req, res) => {
    res.send('Form fight');
  })

  .post('/fight', (req, res) => {
    res.send('fight warrior vs warrior');
  });
