//Operações com String (Concatenação)

let nome =  "Carlos Augusto";

let sobrenome = "Fragoso Bastos";

//Exemplo de concatenação de Strings
let nomeCompleto =  nome + ' ' + sobrenome;

console.log("nome: " + nomeCompleto);




//Template String

let nomeCompTemplate = `nome: ${nome} ${sobrenome}` 

console.log(nomeCompTemplate);

//Template String operações com numeros

let idade = 90;

let age = `Idade: ${idade + 1}`;

console.log(age);

let fruta = "maça";
let objeto = "bola";

let teste = `Eu tenho ${fruta} e uma ${objeto}`;

console.log(teste + `\n${objeto}`);