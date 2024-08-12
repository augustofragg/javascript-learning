//Alterar e definir datas

//Acrescimo nas datas

let d = new Date();

console.log("Data normal: " + d.toString());

//Acrescentando minutos:
d.setMinutes(d.getMinutes() + 15);

//Acrescentando hora;
d.setHours(d.getHours() + 10);

//Acrescentando data
d.setDate(d.getDate() + 5);

//Acrescentando Mês
d.setMonth(d.getMonth() + 2);

console.log("Data alterada: " + d.toString());


//Definindo datas;

let b = new Date();

console.log("\nData normal: " + b.toString());

//Definindo minitos

b.setMinutes(30);

//Definindo horas:

b.setHours(16);

//Definindo dia

b.setDate(25);

//Definindo mês

b.setMonth(8);

//Definindo ano

b.setFullYear(2022);

console.log("Data alterda: " + b.toString());