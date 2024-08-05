//Condicional ternaria

//Exemplo 1

let isMember = true;

let shipping = (isMember ? 2 : 10);

console.log(isMember ? `Você é um membro` : `Você não é um membro`);

console.log(`Frete: ${shipping}`);


//Exemplo 2

let age = 40;

let isAdult = ((age >= 18 && age < 60) ? "Adulto" : "Não é adulto");

console.log(isAdult);

console.log((age >= 18 && age < 60) ? "Adulto" : "Não é adulto");