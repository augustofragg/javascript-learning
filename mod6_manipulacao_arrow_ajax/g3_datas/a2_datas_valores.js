//Datas e valores

//No javaScript janeiro = 0;

let d = new Date();

let year = d.getFullYear();

let month = d.getMonth();

let day = d.getDay();

let hour =  d.getHours();

let minutes = d.getMinutes();

let seconds = d.getSeconds();

let milliseconds = d.getMilliseconds();

console.log("Metodos get da classe  new Date()")

console.log(d.getTime());

console.log(
    "Ano: " + year + "\n"
  + "Mês: " + (month + 1) + "\n" //JANEIRO = 0
  + "Dia: " + day + "\n"
  + "hora: " + hour + "\n"
  + "minutos: " + minutes + "\n"
  + "segundo : " + seconds + "\n"
  + "milliseconds: " + milliseconds
);

console.log("\nMetodo date.now()");

let d_b = Date.now();

console.log(d_b);