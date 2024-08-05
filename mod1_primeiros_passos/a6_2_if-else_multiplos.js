//Condicional if-else multiplos

//Exemplo 1

let idade = 17;

if(idade < 18) {
    console.log("Menor de idade");
    
}else if((idade >= 18) && (idade < 60)) {
    console.log("Adulto");

}else if(idade >= 60) {
    console.log("Idoso");
}

//Exemplo 2

let x = 6;

let y = 5;

if((x > 0) && (y > 0)) {
    console.log("Q1");

}else if((x < 0) && (y > 0)) {
    console.log("Q2");

}else if((x < 0) && (y < 0)) {
    console.log("Q3");

}else if((x > 0) && (y < 0)) {
    console.log("Q4");

}

