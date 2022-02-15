import { WarriorRecord } from '../records/warrior.record';

export const fight = (
  warrior1: WarriorRecord,
  warrior2: WarriorRecord
): {
  log: string[];
  winner: WarriorRecord;
} => {
  const warrior1Obj = {
    hp: warrior1.stamina * 10,
    dp: warrior1.defence,
    warrior: warrior1,
  };
  const warrior2Obj = {
    hp: warrior2.stamina * 10,
    dp: warrior2.defence,
    warrior: warrior2,
  };

  const log: string[] = [];
  let attacker = warrior1Obj;
  let defender = warrior2Obj;

  do {
    const attackStrength = attacker.warrior.power;

    if (defender.dp + defender.warrior.agility > attackStrength) {
      defender.dp -= attackStrength;

      if (defender.dp < 0) {
        defender.hp += defender.dp;
      }
    }
    // const tmp = attacker;
    // attacker = defender;
    // defender = tmp;
    [attacker, defender] = [defender, attacker];
  } while (defender.hp > 0);

  const winner = defender.warrior;

  return { log, winner };
};
