//Usando o metodo map para fazer interação
var number = [1,2,3,4,5,6,7,8,9,10];
console.log("Multiplicar cada item do Array númerico por 2");
console.log("Array númerico:");
console.log(number);
console.log("Resultado da multiplicação:");

var num = number.map
(
    function(valor)
    {
        return valor * 2
    }
);

console.log(num);