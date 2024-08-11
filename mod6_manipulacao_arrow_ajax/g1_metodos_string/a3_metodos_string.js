//Metodos String

let nome = "Eu gosto de carros";


// .replace();

console.log('-----.replace()------');

console.log(nome);

console.log(nome.replace('carros','motos') + '\n');


// .toUpperCase()

console.log('-----.toUpperCase()------');

console.log(nome);

console.log(nome.toUpperCase() + '\n');

// .toLowerCase()

console.log('-----.toLowerCase()------');

console.log(nome.toUpperCase());

console.log(nome.toLowerCase() + '\n');

// .concat()

console.log('-----.concat()------');

console.log(nome);

console.log(nome.concat(' e motos') + '\n');


// .trim()

console.log('-----.trim()------');

let auxilio = '         Carlos';

console.log(auxilio);

console.log(auxilio.trim() + '\n');


// .charAt()

console.log('-----.charAt()------');

console.log(nome);

console.log(nome.charAt(3) + nome[3] + '\n');

// .split()

console.log('-----.split()------');

console.log(nome);

let resultado = nome.split(' ');

console.log(resultado);



