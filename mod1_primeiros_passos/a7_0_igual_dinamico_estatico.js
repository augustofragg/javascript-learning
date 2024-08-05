// == dinâmico e === tipado

/* 
== -> so compara o valor do conteudo sem levar em conta
      o tipo da variavel

=== -> Mais estrito, compara o valor e o tipo das variavel
*/

let idade = "20";

if(idade == 20) {
    console.log("você tem 20 anos");
}
else{
    console.log("não tem 20 anos")
}


if(idade === 20) {
    console.log("você tem 20 anos");
}
else{
    console.log("não tem 20 anos")
}

/* 
!=  dinâmico

!== tipado
*/

if (idade != 20) {
    console.log("igual");

} else {
    console.log("diferente");
}

if (idade !== 20) {
    console.log("igual");

} else {
    console.log("diferente");
}

