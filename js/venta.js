var items = document.getElementById("items");
var ventana = document.getElementById("ventana");

function activar () {
    ventana.classList.add("ventana-mostrar");
}
items.addEventListener("click", activar);