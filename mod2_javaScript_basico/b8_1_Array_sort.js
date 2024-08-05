//Ordenacao de Array -- Sort Array

let fruits = ['Maça','Uva','Laranaja','Banana'];

/*
fruits.sort(function(a,b) {
    if(a > b){
        return 1;
    }else if(a < b) {
        return -1 ;
    }else  {
        return 0;
    }
});
*/

fruits.sort();

console.log(fruits);

fruits.reverse();

console.log(fruits);

let cars = [
    {brand: 'Fiat', year: 2022},
    {brand: 'Bmw', year: 2018},
    {brand: 'Ferrari', year: 2020}
]

/*
cars.sort(function(a,b) {
    if(a.year > b.year) {
        return 1;
    }
    else if(a.year < b.year) {
        return -1;
    }
    else {
        return 0
    }
});
*/

/*
cars.sort((a,b) => {
    return a.year > b.year;
})
*/

cars.sort((a,b) => a.year - b.year);

for(let car of cars) {
    console.log(`Brand: ${car.brand}, year ${car.year}`)
} 