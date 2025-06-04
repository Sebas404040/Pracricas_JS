const formulario = document.getElementById("formulario");
const campo = document.getElementById("producto"); // ⚠️ Asegurate que el ID sea correcto
const lista = document.getElementById("lista");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const valor = campo.value.trim();
    if (valor === "") {
        alert("Por favor, ingrese un valor.");
        return;
    }

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = valor;
    span.style.margin = "0 8px";

    checkbox.addEventListener("change", () => {
        span.style.textDecoration = checkbox.checked ? "line-through" : "none";
    });

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(botonEliminar);
    lista.appendChild(li);
    campo.value = "";
});

