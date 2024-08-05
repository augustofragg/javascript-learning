//Operacoes básicas de Arrays

let ingredientes = [
    'agua',
    'farinha',
    'ovo',
    'corante',
    'açucar'
];

console.log(ingredientes + '\n');

//Demonstra o tamanho do Array

console.log(ingredientes.length);

//Remove o ultimo elemento do arrays

ingredientes.pop();

console.log(ingredientes + '\n');

//Remove o primeiro elemento no inicio do Array

ingredientes.shift()

console.log(ingredientes + '\n');

//Adiciona um elemento no final do array -> utilizar push é o recomendado

ingredientes.push('açucar');

console.log(ingredientes + '\n');

//Adiciona um elemento ao Array de forma aleatoria

ingredientes[5] = 'teste';

console.log(ingredientes);

ingredientes.pop();
ingredientes.pop();

console.log(ingredientes);

ingredientes.push('teste');

console.log(ingredientes);

