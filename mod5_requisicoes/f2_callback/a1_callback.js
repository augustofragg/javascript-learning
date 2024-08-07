console.log('---Exemplo 1----')

function saudacao(name,callback) {
        console.log('Olá ' + name);
        callback();
}

function resposta() {
    console.log('Bom tever')
}


saudacao('Bob',resposta);

console.log('\n----Exemplo 2-----');

console.log('Inicio')

function trabalho(callback) {

    setTimeout(() => {
        const resultado = 'Trabalho Feito'
        callback(resultado);
    },2000);
}

const teste = (resultado) => {
    console.log(resultado);
    console.log('fim');
}

trabalho(teste);

console.log("aguardando...");