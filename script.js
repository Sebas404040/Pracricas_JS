const boton = document.getElementById("agregar");
const contenedor = document.getElementById("contenedor");

const frases = [
  "El DOM es genial 😎",
  "Aprender JS es divertido 🎉",
  "¡Estás creando elementos!",
  "Esto es 100% dinámico 🚀",
  "Sigue así, genio 💪"
];

boton.addEventListener("click", () => {
    const indice = Math.floor(Math.random() * frases.length);

    const div = document.createElement("div"); // contenedor

    const parrafo = document.createElement("p");
    parrafo.textContent = frases[indice];

    const eliminar = document.createElement("button");
    eliminar.textContent = "Eliminar";

    eliminar.addEventListener("click", () => {
        div.remove(); // eliminás todo el bloque
    });

    div.appendChild(parrafo);
    div.appendChild(eliminar);
    contenedor.appendChild(div);
});

