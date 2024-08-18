//Json -> JavaScript object notation

//json.parser(), String declartion -> Object

let personObjString = '{"name": "Carlos Augusto","lastName":"Fragoso Bastos"}';

let personObj = JSON.parse(personObjString);

console.log(personObj);


let carObj = {
    manufacture: 'Ford',
    model:'mustang',
}

let carObjString = JSON.stringify(carObj);

console.log(carObjString);