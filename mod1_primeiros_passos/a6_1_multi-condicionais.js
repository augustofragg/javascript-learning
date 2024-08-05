//Multi-condições

//Exemplo 1
let idade = 45;

if (idade >= 18 && idade < 60) {
    console.log("Voce é adulto");

} else {
    console.log("voce não é adulto")
}

//Exemlo2 

let verificacao = idade > 18 && idade < 60;

if(verificacao) {
    console.log("Adulto");
}
else {
    console.log("Não Adulto")
}


//Exemplo 3

let membro = false;

let valorCompra = true;

if(membro || valorCompra > 100) {
    console.log("Desconto aplicavel");
}
else {
    console.log("Desconto NÃO aplicavel")
}