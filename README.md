Homepage: https://warriorsarenabynuc.herokuapp.com/


Plan Wariors v1:

1. At the beginning, everyone has as many hit points (HP) as their toughness \* 10. Everyone has as many shields (DP) at the beginning equal to their defense.
2. A fighter that starts makes an attack equal to his strength
   3.If the attacked fighter has Shield + Agility greater than his attack power, then:
   3.1. His shield is deducted from the attack amount.
   3.2.A) If the attack was greater than the shield, the remaining amount of attack strength is deducted from its health.
   3.2.B) If the attack was up to the current target, no life is deducted.
   3.2. If the condition 3 is NOT FULFILLED, we simply subtract the attack from life
3. The order is changed and the attacker is now attacked and the attacker is attacked.
4. Repeat points 2 - 4 until someone dies, that is, his HP drops to min. 0. When one of the fighters dies, the attacker is the winner. We write him +1 to victories in the base.

npm i express express-async-errors express-handlebars method-override mysql2 uuid
npm i -D @types/express @types/node @types/uuid @types/method-override ts-node ts-node-dev typescript

tsconfig.json
{
"compilerOptions": {
"noImplicitAny": true,
"preserveConstEnums": true,
"sourceMap": true,
"target": "es6",
"downlevelIteration": true,
"lib": ["es6", "dom.iterable"],
"outDir": "dist",
"experimentalDecorators": true,
"emitDecoratorMetadata": true,
"moduleResolution": "Node"
}
}

package.json
"scripts": {
"start1": "ts-node index.ts",
"start2": "tsnd index.ts"
},

npm run start1
npm run start2
