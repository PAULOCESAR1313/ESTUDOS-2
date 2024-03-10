function avaliarPessoa(nome, sobrenome, a, p)
{
    return 
    {
        nome,
        sobrenome,
        altura = a,
        peso = p,
        calculoImc();
        {
            const indice = this.peso / (this.altura ** 2).toFixed(1)
            if(indice < 18.5)
            {
                console.log("Está abaixo do peso")
            }
            else if(indice >= 18.5 && indece < 24.9)
            {
                console.log("Peso normal")
            }
            else if(indice >= 25 && indice < 29.9)
            {
                console.log("Está acima do peso")
            }
            else if(indice >= 30 && indice < 34.9)
            {
                console.log("Obecidade 1")
            }
            else if(indice >= 35 && indice < 39.9)
            {
                console.log("Obecidade 2")
            }
            else if(indice >= 40)
            {
                console.log("Obecidade 3")
            }
        }
    };
}

const p1 = avaliarPessoa('Paulo Césa', 'Pereira da Silva',1.68,78);
console.log(p1);
p1.calculoImc;