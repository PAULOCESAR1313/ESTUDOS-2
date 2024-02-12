let nome = "Paulo";
let idade = "46";

console.log("Seu nome é: \n" + nome + " \ne sua idade é:\n " + idade);
let rlsybc = require('readline-sync');
let Nome =rlsybc.question("Qual o seu nome:\n");
console.log(`Olá, ${Nome}`);
let Idade =rlsybc.question("Qual a sua idade:\n");
console.log(`Sua idade é:\n ${Idade}`);