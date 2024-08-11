let lista = [45,4,9,16,25];

let listab = [];

let listaobj = [
    {id: 1, nome: 'Carlos Augusto', sobrenome: 'Fragoso Bastos'},
    {id: 2, nome: 'Paulo', sobrenome:'XYZ'},
    {id: 3, nome: 'Fulano', sobrenome: 'da silva'}
]

console.log("Metodo find");

listab = lista.find(function(item) {
    if(item == 16) {
        return true;
    }
});

console.log(listab);

listab = listaobj.find(function(item) {
    if(item.sobrenome == "XYZ") {
        return true;
    }
})

console.log(listab);

console.log("\nMetodo findIndex");

listab = lista.findIndex(function(item) {
    return (item == 16) ? true : false;
});

console.log(listab);

listab = listaobj.findIndex(function(item) {
    return (item.id == 3) ? true : false;
});

console.log(listab);