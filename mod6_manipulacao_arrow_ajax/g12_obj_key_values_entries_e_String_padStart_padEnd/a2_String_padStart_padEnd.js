//padStart e padEnd

let cartao = "1234123412341234";

let lastdigits = cartao.slice(-4);

let mascara = lastdigits.padStart(16,'*');

console.log("padStart: " + mascara);

mascara = lastdigits.padEnd(16,"*");

console.log("padEnd: " + mascara);