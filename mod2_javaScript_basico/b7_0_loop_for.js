//Loop (laço de repetição) for

for(let n = 0; n <= 5;n++) {
    console.log('numero ' + n);
}

console.log()

//Dando loop em Array

//Exemplo 1

let cores = ['vermelho','verde','azul'];

for(let i = 0; i < cores.length;i++) {
    console.log(cores[i]);
}

console.log();

//Exemplo 2

for(let i in cores) {
    console.log(cores[i]);
}

console.log()

//Exemplo 3

for(let cor of cores) {
    console.log(cor);
}

console.log();

//Exemplo 4

let coresb = [
    {nome: 'vermelho', qtd: 10},
    {nome: 'verde', qtd: 5},
    {nome: 'azul', qtd: 15}
]

for(let cor of coresb) {
    console.log(`Nome: ${cor.nome}  ${cor.qtd}`);
}

console.log();

//Exemplo 5 for, com o metodo toUpperCase do array

for(let i in cores) {
    coresb[i].nome = coresb[i].nome.toUpperCase()
}

console.log(coresb);
