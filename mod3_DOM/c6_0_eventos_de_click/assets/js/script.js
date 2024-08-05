function apertou() {
    console.log('APERTOU !');
}

function segurou() {
    console.log('SEGURANDO');

}

function soltou() {
    console.log('SOLTOU');
}

const input = document.querySelector('.input_b');

input.addEventListener('keydown',function(){
    console.log('APERTOU !');
});

input.addEventListener('keypress',function(){
    console.log('SEGUROU');
});

input.addEventListener('keyup',function(){
    console.log('SOLTOU');
});





