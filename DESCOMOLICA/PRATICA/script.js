let pratc = require('readline-sync');

let nome = pratc.question("Digite seu primeiro nome\n");
let sobreNome = pratc.question("Digite o seu sobrenome:\n");

console.log(`Olá, ${nome}' '${sobreNome}`);