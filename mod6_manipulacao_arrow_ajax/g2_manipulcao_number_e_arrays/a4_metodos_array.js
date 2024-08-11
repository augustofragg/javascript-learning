//metodos_arrays

//map()

let lista = [45,4,9,16,25];

let listab = [];

console.log("Metodo map ");

console.log("Lista normal: " + lista);

listab = lista.map(function(item) {
    return item * 2;
});

console.log("Lista map(): " + listab);

console.log("\nMetodo filter");


console.log("Lista normal: " + lista);

listab = lista.filter(function(item) {
    if(item > 20) {
        return true;
    } else {
        return false;
    }
});

console.log("Lista filter(): " + listab);


console.log("\nMetodo every");


console.log("Lista normal: " + lista);

listab = lista.every(function(item) {
    if(item > 20) {
        return true;
    } else {
        return false;
    }
});

console.log("Lista every(): " + listab);


console.log("\nMetodo some");


console.log("Lista normal: " + lista);

listab = lista.some(function(item) {
    if(item > 20) {
        return true;
    } else {
        return false;
    }
});

console.log("Lista some(): " + listab);