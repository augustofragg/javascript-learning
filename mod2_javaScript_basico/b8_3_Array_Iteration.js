//Iteração no Array parte 2

let num = [1,2,3,4,5];


//Foreach - void - Consumer

//Exemplo 1 - mostrar dados no console

num.forEach((x) => console.log(x));

//filter - Predicate - boolean

//Exemplo 1 Filtrar numeros pares

/*
let fnum = num.filter((x) => {
    return (x % 2) === 0; 
});
*/

let fnum = num.filter((x) => x % 2 === 0);

console.log(fnum);

//Map -- map -- function

let mNum = num.map((x) => x * 2);

console.log(mNum);

//Reduce 

/*
let rNum = num.reduce(function(x,y) {
    x = x + y;
    return x;
});
*/

let rNum = num.reduce((x,y) => x +=y);

console.log(rNum);
