import { Router } from 'express';
import { WarriorRecord } from '../records/warrior.record';
import { ValidationError } from '../utils/errors';

export const warriorRouter = Router();

warriorRouter
  .get('/add-form', (req, res) => {
    res.render('warrior/add-form');
  })

  .post('/', async (req, res) => {
    const { name, power, defence, stamina, agility } = req.body;
    if (await WarriorRecord.isNameTaken(name)) {
      throw new ValidationError(`Name ${name} is alredy in use`);
    }

    const warrior = new WarriorRecord({
      ...req.body,
      power: Number(power),
      defence: Number(defence),
      stamina: Number(stamina),
      agility: Number(agility),
    });

    const id = await warrior.insert();

    res.render('warrior/warrior-added', { id, name: warrior.name });
  });
