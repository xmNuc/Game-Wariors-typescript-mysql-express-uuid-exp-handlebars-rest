export const fight = (warrior1, warrior2) => {
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
    const log = [];
    let attacker = warrior1Obj;
    let defender = warrior2Obj;
    do {
        const attackStrength = attacker.warrior.power;
        log.push(`${attacker.warrior.name} will attack ${defender.warrior.name} with strenght of ${attackStrength}`);
        if (defender.dp + defender.warrior.agility > attackStrength) {
            log.push(`${defender.warrior.name} defend himself from ${attacker.warrior.name} attack.`);
            defender.dp -= attackStrength;
            if (defender.dp < 0) {
                log.push(`${attacker.warrior.name} witth strong attack destroyed shield ${defender.warrior.name} and give him ${-defender.dp} damage.`);
                defender.hp += defender.dp;
            }
        }
        else {
            log.push(`${attacker.warrior.name} give ${attackStrength} damage ${defender.warrior.name}.`);
            defender.hp -= attackStrength;
        }
        // console.log({ attacker, defender });
        // const tmp = attacker;
        // attacker = defender;
        // defender = tmp;
        [attacker, defender] = [defender, attacker];
    } while (defender.hp > 0);
    const winner = defender.warrior;
    log.push(`${winner.name} is the WINNER!`);
    return { log, winner };
};
//# sourceMappingURL=fight.js.map