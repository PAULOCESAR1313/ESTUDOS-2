//01º Forma de criar objeto
console.log("1º - Usando chaves");

const pessoa = 
{
    nome: 'Paulo César',
    sobrenome: 'Pereira da Silva',
    idade: '47 anos'
}

console.log(pessoa['nome']);
console.log(pessoa['sobrenome']);
console.log(pessoa['idade']);

//02º Forma de criar objeto
console.log("2º - Usando new Oject()");

const funcionario = new Object();
funcionario.nome = 'Thayanne';
funcionario.sobrenome = 'Silva Pereira';
funcionario.idade = '23 anos';

console.log(funcionario.nome ); console.log(funcionario.sobrenome);
console.log(funcionario.idade);

//03º Forma de criar objeto
console.log("3º - Usando função");

function criarPessoa(nome, sobrenome)
{
    return {nome, sobrenome};
}

const p1 = criarPessoa('Paulo César ', 'Pereira da Silva');
const p2 = criarPessoa('Thayanne ', 'Silva Pereira');

console.log(p1);
console.log(p2);

//03.1º Forma de criar objeto
console.log("3.1 - Usando função");

function criarPessoas(nome, sobrenome)
{
    return 
    {
        nome,
        sobrenome,
        nomeCompleto()
        {
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const p3 = criarPessoas('Joaqui ', 'Silva Pereira');
const p4 = criarPessoas('Cristofer ', 'Silva Pereira');

console.log(p3.nomeCompleto());
console.log(p4.nomeCompleto());