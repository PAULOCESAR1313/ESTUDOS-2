var arr1 = [1, 2, 3, 4, 5, 6, 7];
arr1.splice(3, 1);
console.log(arr1);
arr1.splice(3, 2);
console.log(arr1);

var nomes = ["Paulo", "Thayanne","Joaquim", "Dandara"];
console.log(nomes);
var novoNome = nomes.splice(1, 1, "Isadora");
console.log(novoNome);
console.log("Alteração do Array nomes");
console.log(nomes);
