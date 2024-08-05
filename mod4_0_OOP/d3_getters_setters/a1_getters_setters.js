//GET retorna uma valor especifico
//SET define o valor de uma propriedade dentro do objeto


class Person {
    constructor(FirstName,lastName,age) {
        this.FirstName = FirstName;
        this.lastName = lastName;
        this._age = age;
    }

    get fullName() {
        return `${this.FirstName} ${this.lastName}`;
    }

    get age() {
        return this._age;
    }

    set age(newAge) {
        if(typeof newAge == 'number'){
            this._age = newAge; 
        }
        else {
            console.log('Idade não aceita.(Só números)');
        }
    }
}


let p1 = new Person("João","Silva",23);


console.log(`Nome: ${p1.fullName} + idade: ${p1.age}`);

p1.age = 18;

console.log(`Nome: ${p1.fullName} + idade: ${p1.age}`);
