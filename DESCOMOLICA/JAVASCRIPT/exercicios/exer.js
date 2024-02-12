//Utilizando o map para duplicar os números e trasformar as strigs em letras maiusculas
console.log("Usando o Map para duplicar os números e trasforma as strings em caixa alta");
var arr = [2, "Paulo", 4, "Joaquim", "Isadora", 7, 8, 9, "Thayanne"];
console.log("Elementos do Array original");
console.log(arr);
var arrNumD = arr.map((item)=>
{
    if(typeof item === 'number')
    {
        return item * 2;
    }else if (typeof item === 'string')
    {
        return item.toUpperCase();
    }else 
    {
        return Element;
    }
});
console.log("Novo Array:\n", arrNumD);

//Usando o filter para filtrar os números do Array
console.log("Filtrando somente os números do Array");
console.log("Elementos do Array original");
console.log(arr);
var arrNum = arr.filter((item)=> typeof item === 'number');
console.log("Array formado por números filtrados");
console.log(arrNum);

//Usando o Reduce para Somar os números do Array
console.log("Somando os itens com o seu sucessor!")
console.log("Elementos do Array original");
console.log(arr);

var soma = arr.reduce((total, item)=>
{
    if(typeof item === 'number'){
        return total + item;
    }else 
    {
        return total;
    }
});
console.log("Valor dos itens somados!")
console.log(soma);
