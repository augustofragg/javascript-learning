//Arrow Function

//Exemplo 1

function somar(x,y) {
    return x +  y;
}

//Exemplo 1.1

const somarb = (x,y) => {
    return x + y;
} 

//Exemplo 1.2

let somarc = (x,y) =>  x + y;


//Exemplo 1.3

let somarCount = x => x + 1;

console.log(
    somar(10,23) + '\n'+
    somarb(20,16) + '\n' +
    somarc(15,20) + '\n' +
    somarCount(2)
)


//Exemplo 2

//Exemplo 2.1
function sobrenome(sob) {
    return 'Carlos Augusto ' + sob ;
}

//Exemplo 2.2

const sobrenomeb = (sob) => {
    let nomeCompleto = 'Carlos Augusto ' + sob;
    return nomeCompleto;
}

//Exemplo 2.3

const sobrenomec = sob => 'Carlos Augusto ' + sob;

console.log(
    sobrenome('Fragoso Bastos') + '\n' +
    sobrenomeb('Fragoso Bastos') + '\n' +
    sobrenomec('Fragoso Bastos')
)
