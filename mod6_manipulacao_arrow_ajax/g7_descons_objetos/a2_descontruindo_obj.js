//Desconstruindo objetos Parte 2

let pessoa = {
    nome: 'Carlos Augusto',
    sobrenome: 'Fragoso Bastos',
    idade: 90,
    social: {
        facebook: 'augusto',
        instagram: {
            url:'@augustofragg',
            seguidores:1000,
        } 
    },
    nomeCompleto:function() {
        return `${this.nome} ${this.sobrenome}`;
    }
};


let {nome,sobrenome,idade,social:{instagram:{url:instagram,seguidores}}} = pessoa;

console.log(nome,sobrenome,idade,instagram,seguidores);


/*
function pegarNomeCompleto(obj) {
    return `${obj.nome} ${obj.sobrenome}`;
}
*/

//Desconstruindo o objeto e utilizando como parâmetro

function pegarNomeCompleto({nome,sobrenome = "Silva",social:{instagram:{url:instagram,seguidores}}}) {
    return `${nome} ${sobrenome} ${instagram} ${seguidores}`;
}


let nomeCompleto = pegarNomeCompleto(pessoa);

console.log(nomeCompleto);