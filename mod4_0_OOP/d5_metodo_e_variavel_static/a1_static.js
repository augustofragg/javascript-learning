class Person {

    static hand = 2;
    
    constructor(name) {
        this.name = name;
    }

    static sayHi() {
        console.log("Oi");
    }
}

let p1 = new Person("Augusto");

console.log(`Name: ${p1.name}, hands: ${Person.hand}\n`);

Person.hand = 3;

console.log(`Name: ${p1.name}, hands: ${Person.hand}\n`);

Person.sayHi();