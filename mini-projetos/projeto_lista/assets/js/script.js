clicou();

function clicou() {
    const botao = document.querySelector("#botao");
    const mylist = document.querySelector("#mylist");

    botao.addEventListener("click",function () {
        if (mylist.classList.contains("hidden")) {

            mylist.classList.remove("hidden");
            botao.textContent = "fechar lista";

        } else {
            mylist.classList.add("hidden");
            botao.textContent = "abrir lista";
        }

    })
}