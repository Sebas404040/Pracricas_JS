const form = document.getElementById('formulario');
const campo = document.getElementById("tarea");
const lista = document.getElementById("lista");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const campo = tarea.value.trim();
    if (campo === "") {
        alert("Por favor, preencha o campo.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = campo;

    const btneliminar = document.createElement("button");
    btneliminar.textContent = "Eliminar";

    btneliminar.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(btneliminar);
    lista.appendChild(li);

    tarea.value = "";

});
