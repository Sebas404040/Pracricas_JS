const formulatio = document.getElementById("formulario");
const campo = document.getElementById("campo");
const lista = document.getElementById("lista");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const item = campo.value.trim();
    if (item === "") {
        alert("Ingrese un item");
        return;
    }

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = item;

    checkbox.addEventListener("change", () => {
        span.classList.toggle("tachado");
        if (checkbox.checked) {
            span.style.textDecoration = "line-through";
        } else {
            span.style.textDecoration = "none";
        }
    })

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";

    deleteButton.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);
    lista.appendChild(li);

    campo.value = "";
});
