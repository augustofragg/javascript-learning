function requisicao() {

    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            console.log(`Status: ${response.status}`)
            return response.json();
        })
        .then((json) => {
            console.log(`Titulo ${json[0].title}`);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            console.log('Fim do metodo')
        });

    console.log('Iniciando... requisicao');
}

function inserir() {
    fetch(
        'https://jsonplaceholder.typicode.com/posts'
        ,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'Titulo de teste',
                body: 'Corpo do Teste',
                userId: 2
            })
        }
    )
        .then(response => {
            return response.json();
        })
        .then(json => {
            console.log(json);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            console.log('Fim do metodo')
        });
    console.log('Iniciando... envio de requisicao')
}


requisicao();

inserir();


