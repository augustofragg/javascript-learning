//DOM - manipulação de elementos

/*
innerText: Obtém ou define o texto contido dentro de um elemento, 
           sem incluir tags HTML.

innerHTML: Obtém ou define o HTML contido dentro de um elemento, 
           incluindo todas as tags HTML.

outerHTML: Obtém ou define o HTML do próprio elemento e seu conteúdo, 
           incluindo a própria tag do elemento.
children:  Retorna uma coleção de todos os elementos filhos de um elemento pai, 
           excluindo nós de texto e comentários.

           
*/

//Exemplo 1

function clicou() {
    const teste = document.querySelector("#teste");

    console.log(teste);

    console.log(teste.children);

    console.log(teste.children[0].children);

}

//Exemplo 2

function clicoub() {
    const teste = document.querySelector('#teste');
    const ul = teste.querySelector('ul');

    console.log("InnerHtml " +ul.innerHTML);

    //ul.innerHTML = "<li>Item alterado</li>";

    //ul.innerHTML = ul.innerHTML + "<li>Item alterado</li>";

    ul.children[0].innerHTML = "item <strong>alterado</strong>";

    ul.children[1].innerText += "<li>teste</li>";

    console.log("outerHtml\n" + ul.outerHTML);
}

function clicouc() {
    const teste = document.querySelector("#teste") 

    const ul = teste.querySelector("ul");

    ul.outerHTML = "<strong>Alterado</strong><br/>";
}