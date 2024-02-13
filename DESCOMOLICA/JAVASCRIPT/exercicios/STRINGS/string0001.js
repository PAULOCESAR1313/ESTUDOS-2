//Método para pegar o tamanho de uma string
var nome = "Paulo César";
var tString = nome.length;

console.log(tString);
resultado = tString > 8 ? "Obrigado!" : "Por favor preencha seu nome completo"

console.log(resultado);

var caixaAl = nome.toUpperCase();
console.log(caixaAl);

var jogo = "Barcelona vs Real o melhor time!"
var cortado = jogo.indexOf("Real");
console.log(cortado);

var cortado = jogo.slice(13,);
console.log(cortado);

var val = jogo.includes("Real");
console.log(val);

var str1 = "Hellou";
var str2 = " Turma!";

var str3 = str1.concat(str2);
console.log(str3);

var frase = "     Olá galera do Bem!  ";
console.log(frase.trim());

var num = "1,2,3,4,5,6,7,8";
var arr = num.split(",");

console.log(arr);
console.log(arr[0]);

var s = "Javascript e Python";
var post1 = s.indexOf("Python");
console.log(post1);

var novaStr = s.substring(13, 19);
console.log(novaStr);

var Frase = "Olá Mundo!";
if (Frase.startsWith("Olá"))
{
    let sub = Frase.substring(4,);
    let novaStri = sub.replace("Mundo, Galera!");
    let novaStriMai = novaStri.toUpperCase();
    console.log(novaStriMai);
}
