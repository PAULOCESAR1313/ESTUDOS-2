var valores = [6,5,4,3,2,1];

console.log(valores[0]);

console.log(valores[4]);

for(var pos = 0 ; pos < valores.length ; pos ++){
    console.log("Posição: " + valores[pos]);
}

for(var pos = 0 ; pos < valores.length ; pos ++){
    console.log("Posição: "+ pos + " valor " + valores[pos]);
}

var frutas = [];
frutas[0] = "Banana";
frutas[1] = "Pera";
frutas[2] = "Uva";
frutas[3] = "Maçã";

for(var pos = 0 ; pos < frutas.length ; pos ++){
    console.log("Posição: "+ pos + " valor " + frutas[pos]);
}

var motos = new Array("BMW","HONDA","YAMARA");
console.log(motos);
//Calcular a media de uma sequencia númeria de um Array

var calMed = [5, 6, 7, 10];
var soma = 0;


for(var pos = 0 ; pos < calMed.length ; pos ++){
    soma += calMed[pos];
}

var media = soma/calMed.length;

console.log(media);