//Operador spread

//Exemplo 1 - com array

let numeros = [1,2,3,4,5,6];

let outros = [...numeros,7,8,9,10];

console.log(outros);

//Exemplo 2 - com objeto

let info = {
    nome: 'Carlos Augusto',
    sobreNome: 'Fragoso Bastos',
    idade: 99
}

let novaInfo = {
    ...info,
    cidade: "Campina Grande",
    estado: "Paraíba",
    pais: "Brasil"
}

console.log(novaInfo);

//Exemplo 3 - spread com função

function adicionarInfo(info) {
    let novaInfo = {
        ...info,
        status: 0,
        token: 'akabdoaj',
        data_cadastro:'....'
    }

    return novaInfo;
}

console.log(adicionarInfo({nome:'Carlos Augusto',sobreNome:'Fragoso Bastos'}));