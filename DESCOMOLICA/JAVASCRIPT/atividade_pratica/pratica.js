let pratcsync = require('readline-sync');

let Nome =pratcsync.question("Qual o seu nome:\n");
console.log(`Olá, ${Nome}`);

let Idade =pratcsync.question("Qual a sua idade:\n");
console.log(`Sua idade é:\n ${Idade}`);