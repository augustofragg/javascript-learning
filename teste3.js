function clicou() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((data) => {
        return data.json();
    })
    .then((json) => {
        console.log(json[0].title);
    });
}


clicou();