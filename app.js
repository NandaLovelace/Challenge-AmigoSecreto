// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los amigos
const amigos = [];

// Agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Validaciones
    if (!nombre) {
        alert("Por favor, escribe un nombre válido.");
        return;
    }
    if (amigos.includes(nombre)) {
        alert("¡Este nombre ya está en la lista!");
        return;
    }

    // Agregar al array y actualizar la lista
    amigos.push(nombre);
    actualizarListaAmigos();

    // Limpiar el input
    input.value = '';
    input.focus();
}

// Actualizar la lista visual en el DOM
function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpiar antes de actualizar

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        li.className = 'list-item';
        lista.appendChild(li);
    });
}

// Sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Necesitas al menos 2 amigos para sortear.");
        return;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    // Mezclar el array (algoritmo Fisher-Yates)
    const mezclados = [...amigos];
    for (let i = mezclados.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [mezclados[i], mezclados[j]] = [mezclados[j], mezclados[i]];
    }

    // Mostrar parejas (cada uno da al siguiente, el último al primero)
    mezclados.forEach((amigo, index) => {
        const receptor = mezclados[(index + 1) % mezclados.length];
        const li = document.createElement('li');
        li.textContent = `${amigo} ➔ ${receptor}`;
        li.className = 'result-item';
        resultado.appendChild(li);
    });
}