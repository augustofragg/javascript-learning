//removendo itens do array elemento tipo delete

console.log("delete");

let lista = ['Ovo','Farinha','Corante','Massa'];

console.log("lista normal: " + lista);

delete lista[1];

console.log("Lista alterada: " + lista + "\n");


//removendo itens do array pelo metodo splice

console.log("Metodo splice()");

let listab = ['Ovo','Farinha','Corante','Massa'];

console.log("lista normal: " + listab);

listab.splice(1,1);

console.log("lista alterada: " + listab)

listab.splice(1);

console.log("lista alterada: " + listab + "\n")


//Concat()

console.log("Metodo concat")

let a = ['Azul','Vermelho','Amarelo'];

let b = ['Roxo','verde','Anis'];

let c = a.concat(b);

console.log(c + "\n");

//Metodo sort() e reverse()

console.log("Metodo sort() e reverse()")

let listac = ['Ovo','Farinha','Corante','Massa'];

console.log("Lista normal: " + listac)

listac.sort();

console.log("Lista organizada: " + listac);

listac.reverse();

console.log("Lista reverse(): " + listac);
