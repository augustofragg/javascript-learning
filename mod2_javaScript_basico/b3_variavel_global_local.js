//Variaveis dentro de variaveis

//Exemplo1 
/*Variavel global sofre o incremento, pois foi referenciada
dentro da função
*/

let count = 0;

function add() {
    count ++;
}

add();
add();

console.log(count);


//Exemplo 2

/*A variavel que foi incrementada foi a local localizada
dentro da função, pois foi iniciada com omesmo
nome da variavel global.
*/
let countb = 0;

function addb() {
    let countb = 0;
    countb ++;
}

addb();
addb();

console.log(countb);