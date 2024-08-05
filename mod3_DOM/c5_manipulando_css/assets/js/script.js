function clicou() {
    const li = document.querySelector('#teste ul li');

    li.style.background = '#00F';
    li.style.fontSize = '32px';
}

function clicoub() {
    const li = document.querySelector('#testeb ul li');

    if(li.classList.contains('azul')) {
        li.classList.remove('azul');
        li.classList.add('verde');
    }
    else {
        li.classList.add('azul');
        li.classList.remove('verde');
    }
    
}

function clicouc() {
    const box = document.querySelector('.box');
    
    //box.classList.toggle('azul');

    if(box.classList.contains('azul')){
        box.classList.replace('azul','verde');
    }
    else {
        box.classList.replace('verde','azul');
    }

}