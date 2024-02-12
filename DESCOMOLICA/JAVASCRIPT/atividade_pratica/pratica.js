let pratcsync = require('readline-sync');

let Nome =pratcsync.question("Digite seu nome:\n");

let sobreNome =pratcsync.question("Digite seu sobre nome:\n");

console.log(`Olá\n ${Nome} ${sobreNome}`);