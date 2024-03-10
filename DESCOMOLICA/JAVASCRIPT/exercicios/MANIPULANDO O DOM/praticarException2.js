const numeros = [1,2,3,4,5,"a"];

try
{
    const doublerNumbers = numeros.map((num) =>
    {
        if(typeof num !== 'number')
        {
            throw new Error("O Array só pode ter números!")
        }

        return num * 2;
    })
    console.log(doublerNumbers);
}
catch(error)
{
    console.log("Ocorreu uma exceção: " + error.message);
}