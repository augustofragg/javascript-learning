//Desconstruindo objetos

let pessoa = {
    nome: 'Carlos Augusto',
    sobrenome: 'Fragoso Bastos',
    idade: 90,
    social: {
        facebook: 'augusto',
        instagram: 'augustoFragg' 
    },
    nomeCompleto:function() {
        return `${this.nome} ${this.sobrenome}`;
    }
};

/*Sem desconstrução de objetos
let nome = pessoa.nome;
let sobrenome = pessoa.sobrenome;
let idade = pessoa.idade;
let instagram = pessoa.social.instagram;
*/

//Objeto desconstruido

let {nome:pessoaNome,sobrenome,idade = 100,social:{instagram}} = pessoa;

//Permite alterar o nome da propriedade do objeto e propor um valor padrao
//Caso não haja propriedade.

console.log(pessoaNome,sobrenome,idade,instagram);

