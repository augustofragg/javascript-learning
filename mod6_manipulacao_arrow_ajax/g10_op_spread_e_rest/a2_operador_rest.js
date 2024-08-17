//Operador rest

//Exemplo 1

console.log('Exemplo 1')
function adicionar(...numeros) {
    console.log(numeros);
}

adicionar(1,2,3,4,5);

//Exemplo 2

console.log('Exemplo 2')
function addNomes(...nomes) {
    console.log(nomes);
}

addNomes("Carlos","Augusto","Fragoso","Bastos");

//Exemplo 3

function addNomeb(nomes,...outrosNomes) {
    let novoConjunto = [
        ...nomes,
        ...outrosNomes
    ]
    return novoConjunto;
}

let nome = ["Carlos","Augusto"];

let outros = addNomeb(nome,"fragoso","bastos","teste");

console.log('Exemplo 3')
console.log(outros);