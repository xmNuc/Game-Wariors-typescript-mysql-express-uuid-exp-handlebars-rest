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
