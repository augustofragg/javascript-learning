//Declarando o objeto diretamente

let person = {
    name: "Carlos augusto",
    lastName: "Fragoso bastos",
    age:90,
    fullName() {
        return `${this.name} ${this.lastName}`;
    }
}

console.log(person.fullName());


//Declarando o Objeto com a classe

class Person {
    constructor(name,lastName,age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }

    fullName() {
        return `${this.name} ${this.lastName}`;
    }
}

function createPersonClass(name,lastName,age) {
    
    return new Person(name,lastName,age)
}

let PersonClass = createPersonClass("Carlos augusto","Fragoso Bastos",90);

console.log(PersonClass.fullName());


//Com a funcao factory

function createPerson(name,lastName,age) {
    return {
        name,
        lastName,
        age,
        fullName() {
            return `${this.name} ${this.lastName}`;        }
    }
}

let personFactory = createPerson("Carlos Augusto","Fragoso Bastos",90);
let personFactory2 = createPerson("Tiago","Fragoso Bastos",90);

console.log(personFactory.fullName());

console.log(personFactory2.fullName());
