function clicou() {
    const teste = document.querySelector("#teste");
    const ul = teste.querySelector("ul");

    //ul.children[0].innerHTML += "(alterado)";

    ul.children[1].append(" (alterado)");

    ul.append("<li>Teste</li>");
}

function clicoub() {
    const teste = document.querySelector("#teste");
    const ul = teste.querySelector("ul");

    const newli = document.createElement("li");
    newli.innerText = "Item adicionado";
    
    ul.append(newli);
}


function clicouc() {
    const teste = document.querySelector("#teste");
    const ul = teste.querySelector("ul");

    const newli = document.createElement("li");
    newli.innerText = "Item adicionado";

    ul.prepend(newli);
}