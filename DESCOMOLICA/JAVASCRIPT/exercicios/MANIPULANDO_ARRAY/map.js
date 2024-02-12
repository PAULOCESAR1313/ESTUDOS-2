console.log("Interando Arrays usando o médodo Map");
var numeros =[1,2,3,4,5,6,7,8,9,10];
var num = numeros.map(function(valor)
{
    return valor * 2;
});
console.log(num);

var num1 = numeros.map(valor => valor * 3);
console.log(num1);