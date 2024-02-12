console.log("O método Filter faz um fildro, no Array, pegando os elementos que atendam uma determinada condição.");

console.log("Lista de números de 1 a 10");
var numeros =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numeros);
console.log("Encontre na lista acima os números pares");
var resultados = numeros.filter(item => item % 2 == 0);
console.log("Lista de números pares");
console.log(resultados);