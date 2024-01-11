//Retirando elementos do Array sem auterar o Array orignal "Slice()"
var pessoas = ["Zezinho", "Paulo","MariaS","Reginando","JoãoP","PauloR","Thayanne", "Thaynara"];

var pessoas1 = pessoas.slice(3, 6);

console.log(pessoas);
console.log(pessoas1);

//Concatenação usando o "concat()"
var funcionarios = ["Pedro", "Maria", "Sandra", "José", "Amanda"];
var gerentes = ["Thayanne", "Paulo", "Thaynara"];

var empresa = funcionarios.concat(gerentes);
console.log(empresa);