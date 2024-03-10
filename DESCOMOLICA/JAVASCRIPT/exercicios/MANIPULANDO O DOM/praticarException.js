function divisao(a, b)
{
    if(b === 0)
    {
        throw new Error("Divisão por zero não é permitido!!")
    }
    return a / b
}

try
{
    const resultado = divisao(10, 0);
    console.log("O resultado é: " + resultado)
}
catch(error)
{
    console.log("Ocorreu uma exceção: " + error.message)
}