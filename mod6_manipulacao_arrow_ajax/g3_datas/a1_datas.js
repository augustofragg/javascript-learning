//Data

//Instanciando data

console.log("Metodo new Date()");

let d = new Date();

console.log(d);

//Retorna a String da data

console.log(d.toString());

//Retorna a data no formato internacional GMT

console.log(d.toUTCString() + "\n")


//Instanciando uma data especifica;

//new Date("ano,mes,dia,hora,minuto,milesimo");

console.log("Metodo new Date(data especifica)")

let d_b = new Date(2020,0,1,12,30,12);

console.log(d_b);
console.log(d_b.toString());

//Instanciando new Date() por String

console.log("\nMetodo new Date(ano-mes-dia hora-minuto-segundo)")

let d_c = new Date("2020-01-01 15:42:17");

console.log(d_c.toString());

//Instanciando data inicial do JavaScript

console.log("\nMetodo new Date(0)");

let d_d = new Date(0);

console.log("Local " + d_d.toString() + "\nInternacional: " + d_d.toUTCString());

//Instanciando data por milisegundo

console.log("\nMetodo new Date(milesegundo)");

let d_m = new Date(123156463);

console.log("Local " + d_m.toString() + "\nInternacional: " + d_m.toUTCString());