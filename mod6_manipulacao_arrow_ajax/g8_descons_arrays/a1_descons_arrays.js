//Desconstruindo Array

let info = ['Carlos Augusto','Carlos','Augusto','@augustofragg '];

//Exemplo 1

let [nomeCompleto,primeiroNome,segundoNome,instagram] = info;

console.log('Exemplo 1');
console.log(nomeCompleto + " " + primeiroNome + " " + segundoNome + " " + instagram);

//Exemplo 2

let [nomeCompletob, a, b, instagramb] = info;

console.log('Exemplo 2');
console.log(nomeCompletob + " " + instagramb);

//Exemplo 3

let [nomeCompletoc, , ,instagramc] = info;

console.log('Exemplo 3');
console.log(nomeCompletoc + " " + instagramc);

//Exemplo 4

let [,nome, sobrenome] = info;

console.log('Exemplo 4');
console.log(nome + " " + sobrenome);

//Exemplo 5

let [nomeb,sobrenomeb, idade = 98] = ['Carlos Augusto','Fragoso Bastos'];

console.log('Exemplo 5')
console.log(nomeb + " " + sobrenomeb + " " + idade);

//Exemplo 5

console.log("Exemplo 5");

function criar() {
    
    let a = [1,2,3];

    return a;
}

let [a1,b1,c1] = criar();

console.log(a1 + " " + b1 + " " + c1);