//Retirando elementos de um Array com "splice()"
var arr = [1, 2, 3, 4, 5, 6];

arr.splice(2, 1);
console.log(arr);

//Retirando elementos e subistituindo por outro usando o "splice()"
console.log("Retirando os elementos das posições 1 e 2, e trocando por outros elementos!");
var nome = ["Paulo", "Vitoria","Dandara","Isadora"];
console.log(nome);

console.log("Elementos retirados!");
var novos = nome.splice(1, 2, "Thayanne", "Joaquim");

console.log(novos);
console.log(nome);

var arr2 = [13, 14, 15,16, 18];

arr2.splice(3, 2);
console.log(arr2);
