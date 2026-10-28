/* MENU MOBILE */

const botaoMenu = document.getElementById("botaoMenu");
const navegacaoPrincipal = document.getElementById("navegacaoPrincipal");
const linksNavegacao = document.querySelectorAll(".linkNavegacao");

function fecharMenu() {
    navegacaoPrincipal.classList.remove("menuVisivel");
    botaoMenu.classList.remove("menuAtivo");
    document.body.classList.remove("menuAberto");
    botaoMenu.setAttribute("aria-expanded", "false");
    botaoMenu.setAttribute("aria-label", "Abrir menu");
}

function alternarMenu() {
    const menuEstaAberto = navegacaoPrincipal.classList.toggle("menuVisivel");

    botaoMenu.classList.toggle("menuAtivo", menuEstaAberto);
    document.body.classList.toggle("menuAberto", menuEstaAberto);
    botaoMenu.setAttribute("aria-expanded", String(menuEstaAberto));
    botaoMenu.setAttribute("aria-label", menuEstaAberto ? "Fechar menu" : "Abrir menu");
}

botaoMenu.addEventListener("click", alternarMenu);

linksNavegacao.forEach(function (linkNavegacao) {
    linkNavegacao.addEventListener("click", fecharMenu);
});

document.addEventListener("keydown", function (eventoTeclado) {
    if (eventoTeclado.key === "Escape") {
        fecharMenu();
    }
});

window.addEventListener("resize", function () {
    if (window.innerWidth > 720) {
        fecharMenu();
    }
});


/* ANO ATUAL DO RODAPÉ */

const anoAtual = document.getElementById("anoAtual");
anoAtual.textContent = new Date().getFullYear();
