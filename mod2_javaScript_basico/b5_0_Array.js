//JavaScript - Array

//Declaração de Array

//Exemplo 1

let colors = ['red','green','blue'];


//Chamando o Array

console.log(colors);

//Chamando o indice do Array

console.log(colors[0]);

console.log(colors[1]);

//Tipos de declaração

let nums = [10,30,50];

let lista = ['algo',30,'blabla',true];

let nomes = ['alex','bob','martha'];


//Array Dentro de Array

//Exemplo 1

let listaGrande = ['blabla',nomes];

console.log(listaGrande[1][0]);

//Exemplo 2

let listaGrandeb = [
    'blabla',
    [
        'alex',
        'bob',
        'martha'
    ]
];

console.log(listaGrandeb[1][2]);
