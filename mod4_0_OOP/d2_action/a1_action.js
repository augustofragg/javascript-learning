class Person {

    steps = 0;

    height = 0.00;

    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    takeAstep() {
        this.steps ++;
    }

    setAge(newAge) {
        if(typeof newAge == 'number') {
            this.age = newAge;
        } else {
            console.log('Idade não aceita (só numero)');
        }
    }
}

let p1 = new Person("João",23);
let p2 = new Person("Maria",25);
let p3 = new Person("Pedro",30);

p1.height = 2.09;
p2.height = 1.70;
p3.height = 1.75;

console.log(`P1 nome ${p1.name}, idade ${p1.age}, altura ${p1.height}\n`);
console.log(`P1 nome ${p2.name}, idade ${p2.age}, altura ${p2.height}\n`);
console.log(`P1 nome ${p3.name}, idade ${p3.age}, altura ${p3.height}\n`);

//Chamando funcao step (action)

p1.takeAstep();
p1.takeAstep();
p2.takeAstep();

console.log("p1 steps: " + p1.steps);
console.log("p2 steps: " + p2.steps);
console.log("p3 steps: " + p3.steps);
console.log();

//alterando idade setAge
p1.setAge(43);
p2.setAge(52);
p3.setAge(45);

console.log("p1 age: " + p1.age + "\n");
console.log("p2 age: " + p2.age + "\n");
console.log("p3 age: " + p3.age + "\n");



