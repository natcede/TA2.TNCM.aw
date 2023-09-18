document.addEventListener('DOMContentLoaded', function () {
    const clienteForm = document.getElementById('clienteForm');
    const mensaje = document.getElementById('mensaje');

    clienteForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;
        const estilo = document.getElementById('estilo').value;

        // Aquí puedes realizar el procesamiento de datos o enviarlos a un servidor

        // Ejemplo de mensaje de éxito
        mensaje.textContent = `Cliente ${nombre} registrado para clases de ${estilo} en NatDance con éxito.`;
        mensaje.style.color = 'green';
    });
});