const parrafo = document.getElementById("contador");
const boton = document.getElementById("incrementar");
const restar = document.getElementById("restar");
const resetear = document.getElementById("resetear");

let contador = 0;

boton.addEventListener("click", () => {
    contador++;
    parrafo.textContent = contador;
    if (contador >= 1) {
        parrafo.style.color = "black";
    } else {
        parrafo.style.color = "green";
    }
});

restar.addEventListener("click", () => {
    contador--;
    parrafo.textContent = contador;
    if (contador >= 1) {
        parrafo.style.color = "black";
    } else {
        parrafo.style.color = "green";
    }
});

resetear.addEventListener("dblclick", () => {
    contador = 0;
    parrafo.textContent = contador;
});

