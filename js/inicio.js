var inicio = document.getElementById("inicio");
var menu = document.getElementById("menu");

function activar () {
    menu.classList.add("menu-mostrar");
}
inicio.addEventListener("click", activar);