import { Router } from 'express';
import { WarriorRecord } from '../records/warrior.record';
import { ValidationError } from '../utils/errors';

export const warriorRouter = Router();

warriorRouter
  .get('/add-form', (req, res) => {
    res.render('warrior/add-form');
  })

  .post('/', async (req, res) => {
    if (await WarriorRecord.isNameTaken(req.body.name)) {
      throw new ValidationError(`Name ${req.body.name} is alredy in use`);
    }
    const { name, power, defence, stamina, agility } = req.body;

    const warrior = new WarriorRecord({
      ...req.body,
      power: Number(power),
      defence: Number(defence),
      stamina: Number(stamina),
      agility: Number(agility),
    });

    await warrior.insert();

    res.render('warrior/warrior-added');
  });
