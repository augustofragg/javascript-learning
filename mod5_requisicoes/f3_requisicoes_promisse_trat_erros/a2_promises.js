/* Promises em javaScript

Promises em JavaScript são uma forma de lidar com operações assíncronas de maneira mais limpa e estruturada do que com callbacks. 
Elas representam um valor que pode estar disponível agora, no futuro ou nunca, permitindo que você escreva código assíncrono de 
forma mais síncrona.

Resumo
    Promises: São objetos que representam um valor que pode estar disponível agora, no futuro ou nunca.
    Estados: Pendente(Pending), resolvida(Fulfilled) ou rejeitada(Rejected).
    Métodos: then, catch e finally para lidar com o resultado da Promise.
    Encadeamento: Permitem encadear operações assíncronas de forma limpa.
    Async/Await: Sintaxe moderna para trabalhar com Promises de forma ainda mais legível.
    Promises ajudam a simplificar o código assíncrono, tornando-o mais legível e fácil de manter.
*/

//Criando Promisse


const tarefaDemorada = () => {
    return new Promise((resolve,reject) => {

        setTimeout((()=> {

            const sucesso = true;

            if(sucesso) {
                resolve('Tarefa Concluida');
            }
            else {
                reject('Tarefa Falhou');
            }
        }),2000)

        console.log('Iniciando...')
    })
}
    
tarefaDemorada()
    .then(resultado => {
        console.log(resultado);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log('Operacao concluida')
    });