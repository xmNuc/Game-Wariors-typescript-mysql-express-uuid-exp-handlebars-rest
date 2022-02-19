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
import { fight } from '../utils/fight';
export const arenaRouter = Router();
arenaRouter
    .get('/fight-form', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const warriors = yield WarriorRecord.listAll();
    res.render('arena/fight-form', { warriors });
}))
    .post('/fight', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { warrior1: warrior1Id, warrior2: warrior2Id } = req.body;
    if (warrior1Id === warrior2Id) {
        throw new ValidationError('Choose 2 different oponents');
    }
    const warrior1 = yield WarriorRecord.getOne(warrior1Id);
    const warrior2 = yield WarriorRecord.getOne(warrior2Id);
    if (!warrior1) {
        throw new ValidationError('Warrior 1 was not found');
    }
    if (!warrior2) {
        throw new ValidationError('Warrior 2 was not found');
    }
    const { log, winner } = fight(warrior1, warrior2);
    // console.log(log);
    winner.wins++;
    yield winner.update();
    res.render('arena/fight', { log });
}));
//# sourceMappingURL=arena.js.map