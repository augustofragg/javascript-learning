//Funcao dentro de uma funcao


function addSquare(a,b) {
    function square(x) {
        return x * x;
    }

    let sqrA = square(a);
    let sqrB = square(b);

    return sqrA + sqrB;
}

console.log(addSquare(2,3));


/*
Quando declarar uma funcao dentro de outra
ultizar arrow function
*/

function addSquare(a,b) {
    const square = x => x * x;

    let sqrA = square(a);
    let sqrB = square(b);

    return sqrA + sqrB;
}

console.log(addSquare(4,5));