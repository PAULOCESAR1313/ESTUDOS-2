//função Regular
function multiplicar(x,y)
{
    return x * y;
}

var a = multiplicar(4,2);
console.log(a);

var b = multiplicar(8,7);
console.log(b);

function ponto(entM, saiM, entT, saiT)
{
    var calc = ((saiM - entM) + (saiT - entT));
    return calc;
}
var totalD = ponto(7, 11, 13, 17);
console.log(totalD);