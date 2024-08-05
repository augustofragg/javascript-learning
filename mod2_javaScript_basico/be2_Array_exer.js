//1. No array abaixo, qual o número que pega a Ferri ?
let carros = ['BMW','Ferrari','Mercedes'];

let x = 1;

console.log('1. ' + carros[1]);


// 2. Troque a Ferrari pelo Audi

carros[1] = 'Audi';

console.log('2. Lista com Audi: ');
console.log(carros);

// 3. Adiciona o Volvo a lista

carros.push('Volvo');

console.log('3. Lista com Volvo:')
console.log(carros);

// 4. Exibia quantos itens tem no array

console.log('4. itens no array:');

console.log(carros.length);
