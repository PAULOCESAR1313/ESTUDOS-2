//Filtrando elementos do Array usando o "Filter()"
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Filtrar os números pares do seguinte Array: ");
console.log(number);
var resultado = number.filter(item => item % 2 == 0);
console.log("Segue abaixo os números pares filtrados:");
console.log(resultado);

console.log("Segue abaixo os números filtrados maiores que 5");
var numberFiltrados = number.filter
(
    function(valor)
    {
        return valor > 5;
    }
);

console.log(numberFiltrados);

console.log("Filtrando os números usando o filter dentro de uma função");
function buscarValores(valor)
{
    return valor < 5;
}

var numerosEncontrados = number.filter(buscarValores);
console.log(numerosEncontrados);

var funcionarios = 
[
    {Nome: "Paulo", Idade: "46"},
    {Nome: "Thayanne", Idade: "23"},
    {Nome: "Thaynara", Idade: "25"},
    {Nome: "Thaynar", Idade: "11"},
];

console.log("Lista de funcionarios");
console.log(funcionarios);

var pessoasListadas = funcionarios.filter
(function(valor)
{
    return valor.Idade < 20
})
 console.log(pessoasListadas);