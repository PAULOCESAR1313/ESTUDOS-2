console.log("O Reduce, é um método usado para reduzir um número de itens de um Arrey a um unico item, é usado em operações matematicas");
console.log("Arrey Númerico");
var numero = [1,2,3,4,5,6,7,8,9,10];
console.log(numero);
console.log("Some cada item do Arrey com seu sucesso, e no final mostre o resultado.");
var tot = numero.reduce(function(total, valor)
{
    return total + valor;
},0);
console.log(tot);