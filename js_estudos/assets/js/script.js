let timeBody = document.querySelector('.timer');

let timer;


function timerStart() {
    timer = setInterval(showTime,1000);
}

function timerStop() {
    clearInterval(timer);
}

function showTime() {

    let d = new Date();

    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    
    let text = h + ":" + m + ":"+ s;

    timeBody.innerHTML = text;
}

document.querySelector('#start')
    .addEventListener('click',timerStart);

document.querySelector("#stop")
    .addEventListener('click', () => {
        timerStop();
        timeBody.innerHTML = "00:00:00";
    });