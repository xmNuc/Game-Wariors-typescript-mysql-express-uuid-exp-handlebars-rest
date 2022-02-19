var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ValidationError } from '../utils/errors';
import { v4 as uuid } from 'uuid';
import { pool } from '../utils/db';
export class WarriorRecord {
    constructor(obj) {
        const { id, name, power, defence, stamina, agility, wins } = obj;
        const stats = [power, defence, stamina, agility];
        const sum = stats.reduce((prev, curr) => prev + curr, 0);
        for (const stat of stats) {
            if (stat < 1) {
                throw new ValidationError('Evry stat point have to be minimum 1.');
            }
        }
        if (sum !== 10) {
            throw new ValidationError(`Sum of all statistics points have to be 10. Actual number of points is ${sum}.`);
        }
        if (name.length < 3 && name.length > 50) {
            throw new ValidationError(`Name have to be 3-50 characters. Actual number of characters is ${name.length}.`);
        }
        this.id = id !== null && id !== void 0 ? id : uuid();
        this.name = name;
        this.power = power;
        this.stamina = stamina;
        this.defence = defence;
        this.agility = agility;
        this.wins = wins !== null && wins !== void 0 ? wins : 0;
    }
    insert() {
        return __awaiter(this, void 0, void 0, function* () {
            yield pool.execute("INSERT INTO `warriors`(`id`,`name`,`power`,`defence`,`stamina`,`agility`,`wins`) VALUES(:id, :name, :power, :defence, :stamina, :agility, :wins)", {
                id: this.id,
                name: this.name,
                power: this.power,
                defence: this.defence,
                stamina: this.stamina,
                agility: this.agility,
                wins: this.wins,
            });
            return this.id;
        });
    }
    update() {
        return __awaiter(this, void 0, void 0, function* () {
            yield pool.execute('UPDATE `warriors` SET `wins` =:wins WHERE `id` = :id', {
                id: this.id,
                wins: this.wins,
            });
        });
    }
    static getOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const [results] = (yield pool.execute('SELECT * FROM `warriors` WHERE `id` = :id', {
                id,
            }));
            return results.length === 0 ? null : new WarriorRecord(results[0]);
        });
    }
    static listAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const [results] = (yield pool.execute('SELECT * FROM `warriors`'));
            return results.map((obj) => new WarriorRecord(obj));
        });
    }
    static listTop(topCount) {
        return __awaiter(this, void 0, void 0, function* () {
            const [results] = (yield pool.execute('SELECT * FROM `warriors` ORDER BY `wins` DESC LIMIT :topCount', {
                topCount,
            }));
            return results.map((obj) => new WarriorRecord(obj));
        });
    }
    static isNameTaken(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const [results] = (yield pool.execute('SELECT * FROM `warriors` WHERE `name` = :name', {
                name,
            }));
            return results.length > 0;
        });
    }
}
//# sourceMappingURL=warrior.record.js.map