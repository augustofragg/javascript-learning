//Matematica

let value;

//Valor de PI

value = Math.PI;

console.log("Metodo PI " + value);


//metodo Math.round() arredonda dependendo do numero

value = Math.round(3.76);

console.log(
    "\nvalor 3.76 -> Math.round(): " + Math.round(3.76) + "\n"
  + "valor 3.23 -> Math.round(): " + Math.round(3.23) + "\n"
);

//Metodo Math.floor() arredonda para baixo

value = Math.floor(3.76);

console.log("normal value: " + 3.76 +" Math.floor(): " + value);

//Metodo Math.ceil() arredonda para cima

value = Math.ceil(3.12)

console.log("normal value: " + 3.12 +" Math.ceil(): " + value);

//Metodo Math.abs()

value = Math.abs(-7.2325252);

console.log(
    "\nNormal value: " + -7.2325252 + "\n"
 +  "Metodo abs(): " + value
);

//Metodo Math.random()


value = Math.random() * 100;

console.log("\nMetodo random(): " + value);

value = Math.floor(Math.random() * 100);

console.log("\nMath.random() e Math.floor(): "+ value);


