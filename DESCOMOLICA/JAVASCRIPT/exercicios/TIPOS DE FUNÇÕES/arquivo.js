class pessoa{

    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log("Olá " + this.nome);
    }

    get nomeCompleto(){
        console.log("Olá " + this.nome + " " + this.sobrenome);
    }
}

p1 = new pessoa("Paulo", "Silva");
p1.falar();
p1.nomeCompleto;