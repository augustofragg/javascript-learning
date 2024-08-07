
async function readPost() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let json = await response.json();

    let postArea = document.querySelector('#postArea');

    for(let i in json) {

        if(json.length > 0) {
            let newPost = `<h2>${json[i].title}</h2><p>${json[i].body}</p><hr/>`;

            postArea.innerHTML += newPost;
        }
        else {
            console.log('Erro');
        }
    }
}

readPost();

async function newPost(title,body) {
    await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
            method:'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({
               title,
               body,
               userId:2
            })
        }
    );
    readPost();
}



document.querySelector('#newPost')
    .addEventListener('click',() => {
        let title = document.querySelector('#title').value;
        let body = document.querySelector('#textArea').value;

        newPost(title,body);
});