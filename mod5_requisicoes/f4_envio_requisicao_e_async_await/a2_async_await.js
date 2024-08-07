

/*
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

    alert('Iniciando... requisicao');
}
*/

function createTitle(title) {

    const body = document.querySelector('body');
    const newTitle = document.createElement('h2');

    newTitle.innerHTML = " " + title + "<br/>Teste"; 

    body.append(newTitle);
}



async function requisicao(callbackTitle) {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();

    callbackTitle(json[0].title);


    console.log(`Status: ${response.status}`)
    console.log(`Título ${json[0].title}`)

    console.log('Fim do metodo');
}

/*
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
            console.log(`Status: ${response.status}`)
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
    alert('Iniciando... envio de requisicao')
}
*/

async function inserir() {
    let response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
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
    );

    let json = await response.json();

    console.log(`Status ${response.status}`);

    console.log(json);

    console.log('Fim do metodo');
}


document.querySelector('#request')
    .addEventListener('click', () => {
        requisicao(createTitle);
    });

document.querySelector('#loadc')
    .addEventListener('click', inserir);

