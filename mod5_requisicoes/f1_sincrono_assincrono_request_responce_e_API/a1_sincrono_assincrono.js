//síncrono e assincrono

/*
Síncrono: Executa as operações de forma sequencial e bloqueante. 
Cada operação deve ser concluída antes da próxima iniciar.
*/

console.log('Inicio');

function tarefaDemorada() {
    //Simula uma tarefa demorada

    let contador = 0;

    for(let i = 0; i < 10; i++) {
        contador += 1;
    }

    return contador;
}

const resultado = tarefaDemorada();

console.log('Resultado:', resultado);

console.log('Fim\n');

/*
Assíncrono: Executa as operações de forma não bloqueante. 
O programa pode continuar executando outras tarefas enquanto 
espera pela conclusão de operações assíncronas.
*/

console.log('Inicio ');

function tarefaDemoradab(callback) {
    //Simula uma tarefa demorada com setTimeout

    setTimeout(() => {
        const resultado = 'Tarefa concluida';
        callback(resultado);
    },2000);
}

tarefaDemoradab((resultado) => {
    console.log(resultado);
    console.log('Fim');
});

console.log('Ainda executando outras coisas.....')