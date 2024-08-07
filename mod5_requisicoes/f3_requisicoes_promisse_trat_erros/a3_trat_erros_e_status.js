function requisicao() {

    fetch("https://jsonplaceholder.typicode.com/posts2")
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

    console.log('Iniciando...');
}

requisicao();

