//Arrow function
const soma = (nun1, nun2) =>
{
    return nun1 * nun2;
}

console.log(soma(2, 5));

const numeros = [1, 2, 3, 4, 5, 6, 7];
const valores = numeros.map((num)=> num * num)
console.log(valores);

var listaProdutos = ["geladeira","fogão", "air fryer"];
var listaEmMaiuscula = listaProdutos.map(primeiraEmMaiuscula);

function primeiraEmMaiuscula(elemento)
{
    return elemento.charAt(0).toUpperCase() + elemento.slice(1);
}

console.log(listaEmMaiuscula);