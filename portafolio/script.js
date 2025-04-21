const enviarBtn = document.getElementById('enviar-btn');

enviarBtn.addEventListener('click', function() {
  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();

  if (nombre === '' || email === '' || mensaje === '') {
    alert('Por favor llena todos los campos antes de enviar.');
    return;
  }

  const whatsappMessage = `Hola, soy ${nombre}. Mi correo es ${email}. Te escribo para decirte: ${mensaje}`;

  const whatsappURL = `https://wa.me/573008736957?text=${encodeURIComponent(whatsappMessage)}`;

  window.open(whatsappURL, '_blank');
});
