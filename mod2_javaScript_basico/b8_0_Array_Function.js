//funcoes de array

let fruits = ['maça','Uva','Laranja','Banana'];

console.log(fruits);

//length

let num = fruits.length

console.log(num);

//push adiciona um elemento no ultimo item do Array

fruits.push('Abacaxi');

console.log(fruits);

//shift remove o primeiro elemento do Array

fruits.shift();

console.log(fruits);

//pop remove o ultimo elemento do Array

fruits.pop();

console.log(fruits);

//Join junta os elementos do Array em um unico Array

let fruitsStrg = fruits.join();

console.log(fruitsStrg + '\n' +
            fruits.join('-') + '\n' +
            fruits.join('->'));

//Adicionando Elemento no Array pelo indice

fruits[0] = 'Pêra';

console.log(fruits);

//Adicionando Elemento no ultimo indice no Array

fruits[fruits.length - 1] = 'Uva';

console.log(fruits);