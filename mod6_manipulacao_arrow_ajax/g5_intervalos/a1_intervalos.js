
function showTime() {

    let d = new Date();

    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    
    console.log(h + ":" + m + ":"+ s);
}


let timer = setInterval(showTime,1000);

console.log("ola mundo")

