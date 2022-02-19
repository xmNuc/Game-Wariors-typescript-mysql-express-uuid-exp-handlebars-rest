var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Router } from 'express';
import { WarriorRecord } from '../records/warrior.record';
import { ValidationError } from '../utils/errors';
export const warriorRouter = Router();
warriorRouter
    .get('/add-form', (req, res) => {
    res.render('warrior/add-form');
})
    .post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, power, defence, stamina, agility } = req.body;
    if (yield WarriorRecord.isNameTaken(name)) {
        throw new ValidationError(`Name ${name} is alredy in use`);
    }
    const warrior = new WarriorRecord(Object.assign(Object.assign({}, req.body), { power: Number(power), defence: Number(defence), stamina: Number(stamina), agility: Number(agility) }));
    const id = yield warrior.insert();
    res.render('warrior/warrior-added', { id, name: warrior.name });
}));
//# sourceMappingURL=warrior.js.map