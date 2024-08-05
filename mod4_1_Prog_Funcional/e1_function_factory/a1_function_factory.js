//Programacao funcional - Factory

function createFactory(name,lastName,age) {
    return {
        name,
        lastName,
        age
    }
}

let p1 = createFactory("Carlos Augusto ","Fragoso Bastos ",90);
let p2 = createFactory("Tiago ","Fragoso Bastos ",90);

console.log(p1.name + p1.lastName + p1.age);
console.log(p2.name + p2.lastName + p2.age);