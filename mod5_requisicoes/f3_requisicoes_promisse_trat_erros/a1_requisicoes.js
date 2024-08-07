
function requisicao() {

    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            console.log(`Titulo ${json[0].title}`);
        })

    console.log('Feito!');
}

requisicao();

