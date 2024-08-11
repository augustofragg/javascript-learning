//Metodos de string parte 2

let nome = "Carlos Augusto";

//.slice

console.log('----- .slice()-----')


console.log(nome.slice(0));

console.log(nome.slice(0,7));

console.log(nome.slice(-7));

console.log(nome.slice(-14,-5));


//.subString()

console.log('\n----- .subString() -----');

console.log(nome.substring(0));

console.log(nome.substring(0,7));


console.log('\n----- .substr() -----');

//Metodo depreciado

console.log(nome.substr(0,6));

console.log(nome.substr(-7,7));