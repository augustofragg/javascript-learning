function clicou(){
    const teste = document.querySelector("#teste");
    const ul = teste.querySelector("ul");

    const newheader = document.createElement("h1");
    newheader.innerHTML = "novo item";

    //ul.before(newheader);
    
    ul.after(newheader);
}

function clicoub() {
    const teste = document.querySelector("#teste");
    const ul = teste.querySelector("ul");

    let newUL = document.createElement("ul");
        ul.after(newUL);
    
    for(let i = 0; i < 5; i ++) {
        let newLi = document.createElement("li");
        newLi.innerHTML = "item adicionado";
        newUL.append(newLi);
    }

}
 