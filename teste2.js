console.log('Inicio');

function TarefaDemorada(callback) {

    setTimeout(() => {
        const resultado = 'Tarefa concluida';
        callback(resultado);
    },2000);
}

function callback(texto) {
    console.log(texto);
    console.log('fim');
}

TarefaDemorada(callback);

console.log('esperando');