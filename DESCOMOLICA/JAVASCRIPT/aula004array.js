//Invertendo a ordem dos elementos de um Array "reverse()"
var nun = [1, 2, 3, 4, 5, 6];
console.log("Array invertido: " + nun.reverse());
// Transformando um Array em uma string, separando por caracteres ou espaço
console.log(nun.join('|'));
console.log(nun.join('/'));
console.log(nun.join(' '));
//Para retirar o primeiro elemento de um Array "Shift()"
var nun1 = [1, 2, 3, 4, 5, 6];
console.log(nun1);
var retirado = nun1.shift();
console.log(retirado);
console.log(nun1);
//Para encontrar a posição de um elemento especifico de um Array "indexOf()"
var nun2 = [2, 4, 6, 8, 10];
console.log("Os elementos do Array, são: " + nun2);
console.log("Qual a posição do elemento 6?");
console.log("A posição do elemento 6 é: " + nun2.indexOf(6));
//Para acrescentar um elemento no Array push()
var nun3 = [1, 3, 5, 7, 9];
console.log("Acrescentando elementos a esse Array: " + nun3);
nun3.push(11);
console.log(nun3);
//Retirando o ultimo elemento do Array "pop()"
console.log("Retirando o Ultimo elemento do Array: " + nun3);
nun3.pop();
console.log(nun3); 