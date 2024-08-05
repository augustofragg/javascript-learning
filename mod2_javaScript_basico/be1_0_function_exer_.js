//Exercicios

/*

Exericio 1

Calcule a porcentagem entre 2 numero.
Exemplo: 25% de 40 é 10
Fórmula da porcentagem: (y/x) * 100
Uso de funcao
*/

function calcPct(n1,n2) {

    return (n2/n1) * 100;

}


let x = 40;
let y = 10;

let pct = calcPct(40,10);

console.log(`${pct}% de ${x} é ${y}`);