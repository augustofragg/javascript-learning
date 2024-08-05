//Programacao funcional - Constructor

let person = {
    name: 'Carlos Augusto ',
    lastName: 'Fragoso Bastos ',
    age: 90,
    toString() {
        return this.name +  this.lastName + this.age;
    },
    start() {
        console.log('iniciando o objeto');
    }

}

person.start();

console.log(person.toString());