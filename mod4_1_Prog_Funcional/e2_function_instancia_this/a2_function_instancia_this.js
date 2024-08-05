//Com a funcao factory

/*Programação funcional

- Não a instancias
- E não se pode declarar funções anônimas para referênciar
  propriedades do proprio objeto

*/
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
