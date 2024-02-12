let pratc = require('readline-sync');

let nome = pratc.question("Digite seu primeiro nome\n");
let sobreNome = pratc.question("Digite o seu sobrenome:\n");
let nomeComplet = `Olá, ${nome} ${sobreNome}`;

console.log(nomeComplet);