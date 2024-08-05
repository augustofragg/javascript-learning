//funcao - retornos


//Exemplo 1

function soma(n1,n2) {
    let resultado = n1 + n2;
    
    return resultado;
}

let s = soma(10,26);

console.log(s);
console.log(soma(10,26));


//Exemplo 2

function nomeCompleto(nome,sobreNome) {
    return `${nome} ${sobreNome}`;
}

let completo = nomeCompleto("Carlos Augusto","Fragoso Bastos");
console.log(completo);

console.log( nomeCompleto("Carlos Augusto","Fragoso Bastos"));


//Exemplo 3 -- retornos com condição

function olderAge(age) {
    if(age >= 18) {
        return true;
    }
    else {
        return false;
    }
}

let check = olderAge(40);

if(check) {
    console.log('Maior de idade');
}
else {
    console.log('Menor de Idade')
}
