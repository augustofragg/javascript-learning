//Iterações com Array

let fruits = ['Banana','Laranaja','Maça','Pêra','Uva'];

//Metodo Filter

/*
let bigFruits = fruits.filter((x) => {
   return x.length > 4;
});
*/

let bigFruits = fruits.filter(x => x.length > 4);

console.log(bigFruits);

/*Metodo every -> retorna verdadeiro so se todos os elementos do Array
  satisfazer a condição  
*/

/*
let okFruit = fruits.every((x) => {
   return x.length > 3;
});
*/

let everFruit = fruits.every((x) => x.length > 3); 

if (everFruit) {
    console.log('Todos são maiores que 3');
} else {
    console.log('Não são todos maiores que 3');
}

//Metodo some

/*
let smFruit = fruits.some((x) => {
    return x.length > 3;
}) 
*/

let smFruit = fruits.some((x) => x.length > 3);

if (smFruit) {
    console.log('Algum item é maior que 3');
} else {
    console.log('Nenhum item é maior que 3');
}

//Metodo include: Proucura um item no Array


if (fruits.includes('Uva')) {
    console.log('Tem uva sim!');            
} else {
    console.log('Não tem uva...');
}
