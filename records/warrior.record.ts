import { ValidationError } from '../utils/errors';

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

  constructor(obj: WarriorRecord) {
    const { id, name, power, defence, stamina, agility, wins } = obj;

    const stats = [power, defence, stamina, agility];
    const sum = stats.reduce((prev, curr) => prev + curr, 0);

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

    this.id = id;
    this.name = name;
    this.power = power;
    this.stamina = stamina;
    this.defence = defence;
    this.agility = agility;
    this.wins = wins;
  }

  async insert() {}

  async update() {}

  static async getOne(id: string) {}
  static async listAll() {}
  static async listTop(topCount: number) {}
}
