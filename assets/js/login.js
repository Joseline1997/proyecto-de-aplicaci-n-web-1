// Obtener una referencia al formulario y a los campos de entrada de correo electrónico y contraseña
const form = document.querySelector("form");
const emailInput = form.querySelector('input[name="email"]');
const passwordInput = form.querySelector('input[name="password"]');

// Función para validar el formulario antes de enviar
function validateForm(event) {
  let isValid = true;

  // Validar el formato del correo electrónico
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    alert("Por favor, ingrese un correo electrónico válido.");
    isValid = false;
  }

  // Validar que se haya ingresado una contraseña
  if (passwordInput.value.trim() === "") {
    alert("Por favor, ingrese una contraseña.");
    isValid = false;
  }

  // Prevenir el envío del formulario si hay errores de validación
  if (!isValid) {
    event.preventDefault();
  }
}

// Agregar un evento de escucha al formulario para validar al enviar
form.addEventListener("submit", validateForm);