// Definição da classe Funcionario
class Funcionario {
  constructor(nome, idade, cargo) {
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
  }

  seApresentar() {
    return `Olá, eu sou ${this.nome}, tenho ${this.idade} anos e trabalho como ${this.cargo}.`;
  }

  trabalhar() {
    return `Estou realizando minhas tarefas como ${this.cargo}.`;
  }
}

// Definição da classe Gerente que herda de Funcionario
class Gerente extends Funcionario {
  constructor(nome, idade, cargo, departamento) {
    super(nome, idade, cargo);
    this.departamento = departamento;
  }

  gerenciar() {
    return `Estou gerenciando o departamento ${this.departamento}.`;
  }
}

// Definição da classe Desenvolvedor que herda de Funcionario
class Desenvolvedor extends Funcionario {
  constructor(nome, idade, cargo, linguagem) {
    super(nome, idade, cargo);
    this.linguagem = linguagem;
  }

  programar() {
    return `Estou programando em ${this.linguagem}.`;
  }
}

// Criação de instâncias de um gerente e de um desenvolvedor
const gerente1 = new Gerente('João', 35, 'Gerente de Projetos', 'TI');
const desenvolvedor1 = new Desenvolvedor('Maria', 28, 'Desenvolvedora', 'JavaScript');

// Chamada dos métodos apropriados para cada funcionário
console.log(gerente1.seApresentar());
console.log(gerente1.gerenciar());
console.log(desenvolvedor1.seApresentar());
console.log(desenvolvedor1.programar());

// Função para exibir mensagem de erro na página
function exibirErro(mensagem) {
  const erroElement = document.getElementById('erro');
  erroElement.innerText = mensagem;
}

// Função para criar instâncias de funcionários a partir dos valores do formulário
function criarFuncionarios() {
  const nome = document.getElementById('nome').value;
  const idade = document.getElementById('idade').value;
  const cargo = document.getElementById('cargo').value;
  const departamento = document.getElementById('departamento').value;
  const linguagem = document.getElementById('linguagem').value;

  try {
    if (!nome || !idade || !cargo || !departamento || !linguagem) {
      throw "Todos os campos devem ser preenchidos.";
    }

    if (isNaN(idade) || idade <= 0) {
      throw "A idade deve ser um número válido e maior que zero.";
    }

    // Criação de instâncias de um gerente e de um desenvolvedor
    const gerente2 = new Gerente(nome, idade, cargo, departamento);
    const desenvolvedor2 = new Desenvolvedor(nome, idade, cargo, linguagem);

    // Exibição das informações na página
    document.getElementById('info-gerente').innerText = gerente2.seApresentar();
    document.getElementById('info-gerente-extra').innerText = gerente2.gerenciar();
    document.getElementById('info-desenvolvedor').innerText = desenvolvedor2.seApresentar();
    document.getElementById('info-desenvolvedor-extra').innerText = desenvolvedor2.programar();
  } catch (error) {
    exibirErro(error);
  }
}

