document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Aquí podrías enviar los datos a un servidor o procesarlos como desees
    const responseMessage = `Gracias, ${name}! Hemos recibido tu mensaje.`;
    document.getElementById("responseMessage").textContent = responseMessage;

    // Limpiar el formulario
    this.reset();
});

