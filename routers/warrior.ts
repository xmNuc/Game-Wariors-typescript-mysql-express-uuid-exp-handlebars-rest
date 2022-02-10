import { Router } from 'express';

export const warriorRouter = Router();

warriorRouter
  .get('/add-form', (req, res) => {
    res.send('Form to add warrior');
  })

  .post('/', (req, res) => {
    res.send('add warrior');
  });
