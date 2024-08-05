//Funcao - parametros

//Exemplo 1

//Declarando uma funcao com parâmetros

function somar(n1,n2) {

    let resultado = n1 + n2;

    console.log('Resultado ' + resultado);

}

//chamando a função e passando argumentos tipo number
somar(10,16);

//Exemplo2 

function nomeCompleto(nome,sobrenome) {

    console.log(`${nome} ${sobrenome}`);
}

//chamando a funcão e passando argumentos tipo String
nomeCompleto("Carlos Augusto","Fragoso Bastos");
nomeCompleto("Tiago","Fragoso Bastos");


