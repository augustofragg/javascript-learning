function soltou(e) {
    console.log(e.code);
    console.log(e.key)
}

const input = document.querySelector('.input_a');

input.addEventListener('keyup',soltou);


function soltoub(e) {
    console.log('Tecla APERTADA: ' + e.code);
    console.log('SHIFT ? ' + e.shiftKey);
    console.log('CTRL? ' + e.ctrlKey);
    console.log('ALT? ' + e.altKey);
    console.log('----');
}

const inputb = document.querySelector('.input_b');

inputb.addEventListener('keydown',soltoub);
