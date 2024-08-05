class Person {

    height = 0.00;

//Declaração do contructor, que difine quais variaveis
//Devem ser preenchidas para que a classe deve ser instanciada
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
}

//Instanciando a classe

let p1 = new Person("João",23);
let p2 = new Person("Maria",25);
let p3 = new Person("Pedro",30);

//Atribuindo valores a variavel height

p1.height = 2.09;
p2.height = 1.70;
p3.height = 1.75;


console.log(`P1 nome ${p1.name}, idade ${p1.age}, altura ${p1.height}\n`);
console.log(`P1 nome ${p2.name}, idade ${p2.age}, altura ${p2.height}\n`);
console.log(`P1 nome ${p3.name}, idade ${p3.age}, altura ${p3.height}\n`);