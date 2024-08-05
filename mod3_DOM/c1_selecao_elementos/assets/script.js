//DOM - Document Object Model 

//Selecionando elementos do HTML5 - mais especifico

//Pela tag (Elements sempre retorna um Array) 

let elementsTgName = document.getElementsByTagName("h1");

console.log(elementsTgName);

//Pelo Id

let elementTgId = document.getElementById("teste");

console.log(elementTgId);

//Pelo nome da Classe (Elements sempre retorna uma Array)

let elementClsName = document.getElementsByClassName("botao");

console.log(elementClsName);

//Selecionando Elementos de modo mais abrangente

//Query selector pela tag

let elementsQtgName = document.querySelector("h1");

console.log(elementsQtgName);

//Query selector pelo nome da classe

let elementsQclsName = document.querySelector(".botao");

console.log(elementsQclsName);

//Query selector pelo iD da classe

let elementsQid = document.querySelector("#teste");

console.log(elementsQid)

//Query selector selecionando multiplos elementos

let elementsQall = document.querySelectorAll("#lista ul li,#listab ul li");

console.log(elementsQall);