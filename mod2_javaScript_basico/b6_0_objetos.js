//Objetos

//Declarando um objeto

let personagem = {
    nome: 'Augusto',
    idade: 90,
    paiz: 'Brazil',
    //Declarando um vetor dentro do objeto
    olhos:['Preto','Azul'],
    //Declarando outro objeto dentro do objeto
    caracteristicas: {
        forca: 20,
        magia: 5,
        stamina: 15
    },
    //Declarando objeto dentro de vetores
    carros: [
        {modelo:'Fiat',cor:'Preto'},
        {modelo:'Ferrari',cor:'vermelho'}
    ]
}

//Chamando um objeto pelo console

console.log(
    `Nome: ${personagem.nome} \n` +
    `Idade: ${personagem.idade} \n` +
    `Paiz: ${personagem.paiz} \n` +
    `Olhos: ${personagem.olhos[1]} \n` +
    `--------- Caracteristicas---------\n` +
    `Força: ${personagem.caracteristicas.forca} \n` +
    `Magia: ${personagem.caracteristicas.magia} \n` +
    `Stamina: ${personagem.caracteristicas.stamina}`
);

//Acessando e Mudando dados no objeto

personagem.nome = 'Carlos';
personagem.caracteristicas.forca += 5;
personagem.olhos.push('Verde');

console.log(
    `\n---------Mudanças no objeto---------\n` +
    `Nome: ${personagem.nome}\n` +
    `Força: ${personagem.caracteristicas.forca}\n` +
    `Olhos: ${personagem.olhos} \n` +
    `\n---------Vetor--Carros--------------\n` +
    `Carro 1 - modelo: ${personagem.carros[0].modelo} \n` +
    `Carro 1 - cor: ${personagem.carros[0].cor} \n` +
    `Carro 2 - modelo: ${personagem.carros[1].modelo} \n` +
    `Carro 2 - cor: ${personagem.carros[1].cor}` 
);
