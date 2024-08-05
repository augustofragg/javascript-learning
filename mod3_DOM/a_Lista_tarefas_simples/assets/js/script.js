const ul = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

//const button = document.querySelector('button');

function addLi(e) {
    if (e.code === 'Enter') {
        const newLi = document.createElement('li');
        newLi.innerHTML = input.value;

        ul.append(newLi);

        input.value = ' ';
    }
}

function removeLi() {
    const myList = document.getElementById('myList');

    if(myList.children.length > 0) {
        myList.removeChild(myList.children[0]);
    }
    else {
        alert('Não ha mais itens para remover');
    }
}

button.addEventListener('click',removeLi);



input.addEventListener('keyup', addLi);

//button.addEventListener('click',removeLi);
