//Eventos de clique


//Exemplo 1

function clicou() {
    console.log("clicou no botãoo");
}


/*
let botao = document.querySelector(".botao");
botao.addEventListener("click",() => {
    clicou();
});
*/

//Exemplo 2

document.querySelector(".botao").addEventListener("click",() => {
    clicou();
});