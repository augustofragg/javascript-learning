async function enviar() {
    let arquivo = document.getElementById('arquivo').file;

    let body = new FormData();
    body.append('arquivo', arquivo);

    let req = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        body: body,
        headers: {
            'Content-type': 'multipart/form-data'
        }
    });
}

function mostrar() {
    let imagem = document.getElementById("arquivo").files[0];

    let img = document.createElement('img');

    img.src = URL.createObjectURL(imagem);
    img.width = 200;
    document.getElementById("area").appendChild(img);

    document.getElementById("area").innerHTML = " ";
}

function mostrarb() {
    let reader = new FileReader();
    let imagem = document.getElementById('arquivo').files[0];

    reader.onloadend = function() {
        let img = document.createElement('img');
        img.src = reader.result;
        img.width = 200;

        document.getElementById('area').appendChild(img);
    }

    reader.readAsDataURL(imagem);
}