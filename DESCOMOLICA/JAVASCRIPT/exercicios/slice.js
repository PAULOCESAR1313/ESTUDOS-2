console.log("Manipulando Array com slice!");
console.log("O slice cria um novo Array, ele não altera o Array original!");

var funcionarios = ["José", "Maria", "Paulo", "Thayanne", "Thaynara"];
console.log("Relação de funcionarios");
console.log(funcionarios);
console.log("Funcionarios promovidos");

var promovido = funcionarios.slice(2, 5);
console.log(promovido);
