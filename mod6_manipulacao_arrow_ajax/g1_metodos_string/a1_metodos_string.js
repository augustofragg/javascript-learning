//Metodos de string

let nome;
let resultado;

// .length

nome = 'Carlos Augusto';

resultado = nome.length

console.log('.length: ' + resultado + "\n");

//.indexOf()

resultado = nome.indexOf('Augusto');

console.log('.IndexOf: ' + resultado);

if(nome.indexOf('Silva') > -1) {
    resultado = 'Achou';
}
else {
    resultado = 'Não achou';
}

console.log(resultado);


