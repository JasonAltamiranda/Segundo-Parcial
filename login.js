document.getElementById('loginForm').addEventListener('submit', function(event) {
event.preventDefault();

const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

if (!email.includes('@')) {
    alert('Por favor, ingrese un correo electrónico válido.');
    return;
}
if (password.length < 6) {
    alert('La contraseña debe tener al menos 6 caracteres.');
    return;
}
alert('Formulario enviado correctamente.');
});