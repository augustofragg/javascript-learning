//funções em objetos

let personagem = {
    nome:' Carlos Augusto',
    sobreNome: 'Fragoso Bastos',
    idade: 90,
    nomeCompleto: function() {
        return `nome ${this.nome} ${this.sobreNome}`;
    },
    /*
    função anonima - ArrowFunction não tem acesso aos
    dados do Obejo
    */
    teste:() =>{
        return 'Teste';
    },

}

console.log(`Nome ${personagem.nomeCompleto()}\n` +
            `Teste: ${personagem.teste()} \n`
);