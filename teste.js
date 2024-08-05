let num = [1,2,3,4,5,6,7,8];

let animals = ['Cachorro','Cabra','Gato','Passaro']


/*
console.log(
    num.map((x) => x * 2) + '\n' +
    
    num.reduce((x,y) => y += x) + '\n' +

    num.filter((x) => x % 2 === 0) + '\n' +

    animals.filter((x) => x.charAt(0) == 'C') + '\n' +

    animals.filter((x) => x.length > 6) + '\n' +

    animals.map((x) => x.toUpperCase())

)
*/

let sum = 0;

num.forEach(function(x){
    sum += x;
});

console.log(sum)

let numr = num.reverse();

console.log(numr);

console.log(numr.sort((a,b) => a-b));