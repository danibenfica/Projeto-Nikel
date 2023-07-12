const nome = "Daniele";
let nome2 = "";
let pessoaDefault = {
    nome: "Daniele",
    idade: "26",
    trabalho: "" 
}

let nomes = ["Daniele","Denise","Davi"]
let pessoas = [
    {
        nome: "Daniele",
        idade: "26",
        trabalho: ""  
    },
    {
        nome: "Denise",
        idade: "27",
        trabalho: "Prof"
    },
    {
        nome: "Davi",
        idade: "28",
        trabalho: "Dev"
    }
]

function alterarnome() {
    nome2 = "Renan"
    console.log("Valor alterado:")
    console.log(nome2)
}

function recebeEalteranome (novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome:")
    console.log(nome2)
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);
    
    console.log("Idade:");
    console.log(pessoa.idade);
    
    console.log("Trabalho:");
    console.log(pessoa.trabalho);  
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa)
}

function imprimirPessoas() {
    console.log("---IMPRIMIR PESSOAS---");
    pessoas.forEach((item) => {
        console.log("Nome");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.idade);
        
        console.log("Trabalho:");
        console.log(item.trabalho); 
    })
}

imprimirPessoas();

adicionarPessoa({
    nome: "Emilly",
    idade: "18",
    trabalho: "Não Trabalha"
});

imprimirPessoas();