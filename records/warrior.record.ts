import { ValidationError } from '../utils/errors';
import { v4 as uuid } from 'uuid';
import { pool } from '../utils/db';
import { FieldPacket } from 'mysql2';

type WarriorRecordResults = [WarriorRecord[], FieldPacket[]];

export class WarriorRecord {
  // /**id is UUID*/
  public id?: string;
  // /** Name is always unique */
  public readonly name: string;
  public readonly power: number;
  public readonly defence: number;
  public readonly stamina: number;
  public readonly agility: number;
  public wins?: number;

  constructor(obj: Omit<WarriorRecord, 'insert' | 'update'>) {
    const { id, name, power, defence, stamina, agility, wins } = obj;

    const stats = [power, defence, stamina, agility];
    const sum = stats.reduce((prev, curr) => prev + curr, 0);

    for (const stat of stats) {
      if (stat < 1) {
        throw new ValidationError('Evry stat point have to be minimum 1.');
      }
    }

    if (sum !== 10) {
      throw new ValidationError(
        `Sum of all statistics points have to be 10. Actual number of points is ${sum}.`
      );
    }
    if (name.length < 3 && name.length > 50) {
      throw new ValidationError(
        `Name have to be 3-50 characters. Actual number of characters is ${name.length}.`
      );
    }

    this.id = id ?? uuid();
    this.name = name;
    this.power = power;
    this.stamina = stamina;
    this.defence = defence;
    this.agility = agility;
    this.wins = wins ?? 0;
  }

  async insert(): Promise<string> {
    await pool.execute(
      'INSERT INTO `warriors`(`id`,`name`,`power`,`defence`,`stamina`,`agility`,`wins`) VALUES{:id, :name, :power, :defence, :stamina, :agility, :wins}',
      {
        id: this.id,
        name: this.name,
        power: this.power,
        defence: this.defence,
        stamina: this.stamina,
        agility: this.agility,
        wins: this.wins,
      }
    );
    return this.id;
  }

  async update(): Promise<void> {
    await pool.execute('UPDATE `warriors` SET `wins` =:wins', {
      wins: this.wins,
    });
  }

  static async getOne(id: string): Promise<WarriorRecord | null> {
    const [results] = (await pool.execute(
      'SELECT * FROM `warriors` WHERE `id` = :id',
      {
        id: id,
      }
    )) as WarriorRecordResults;
    return results.length === 0 ? null : results[0];
  }

  static async listAll(): Promise<WarriorRecord[]> {
    const [results] = (await pool.execute(
      'SELECT * FROM `warriors`'
    )) as WarriorRecordResults;
    return results.map((obj) => new WarriorRecord(obj));
  }

  static async listTop(topCount: number): Promise<WarriorRecord[]> {
    const [results] = (await pool.execute(
      'SELECT * FROM `warriors` ORDER BY `wins` DESC LIMIT :topCount',
      {
        topCount,
      }
    )) as WarriorRecordResults;

    return results.map((obj) => new WarriorRecord(obj));
  }
}
