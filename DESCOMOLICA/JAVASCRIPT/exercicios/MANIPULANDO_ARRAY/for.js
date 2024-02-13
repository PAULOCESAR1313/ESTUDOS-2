let carros = 
[
    { id: 1, modelo: "Corsa", marca: "Chevrolet", preco: 45000, dataCriacao: "01/01/2011"},
  
    { id: 2, modelo: "Punta", marca: "Fiat", preco: 35000, dataCriacao: "01/02/2022"},
  
    { id: 3, modelo: "Gol", marca: "Volkswagen", preco: 40000, dataCriacao: "01/03/2023"}
  
];

let totalPreco = 0;

for(let i = 0; i < carros.length; i++)
{
    let carro = carros[i];
    totalPreco += carro.preco;
}

console.log("Total de Preços dos carros: ", totalPreco);