class Person {

    age = 0;

    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(`${this.name} diz Oi`)
    }

}

class Student extends Person {

    constructor(name,id) {
        super(name);
        this.id = id;
    }


    sayHi() {
        console.log(`${this.name} é um estudante e diz oi`);
    }

    sayHello(){
        super.sayHi();
    }
}

let p1 = new Student("Augusto",1);

p1.age = 20;

console.log(`${p1.name} tem ${p1.age} anos e matricula #${p1.id}\n`);

p1.sayHi();

p1.sayHello();