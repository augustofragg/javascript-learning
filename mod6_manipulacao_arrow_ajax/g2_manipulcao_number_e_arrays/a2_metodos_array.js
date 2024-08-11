//Metodoso Array

let lista = ['Ovo','Farinha','Corante','Massa'];


//Metodo toString

console.log("toString()\n" + lista.toString() + "\n");

/*
Metodo join() -> toString() com a possibilidade de adicionar um
separador 
*/

console.log("join(separador)\n"+ lista.join('-') + "\n");

//metodo indexOf()

console.log("indexOf()\n" + lista.indexOf('Corante') + "\n");


//Removendo itens do Array pop() e shift()
//pop() remove o ultimo item do array
//shift() remove o primeiro item do array

let aux = lista ;

console.log("Lista Normal: " + aux.toString());

aux.pop()

console.log("Lista pop(): " + aux.toString());

aux.shift()

console.log("Lista shift(): " + aux.toString());

//Adicionando itens no Array metodo push e index;

aux = lista;

console.log("\nLista Normal: " + aux);

aux.push("Açucar")

console.log("Lista push(): " +aux);

//aux[3] = "Farinha";

aux[aux.length] = "Farinha"

console.log("Lista aux[n]: " +aux);



