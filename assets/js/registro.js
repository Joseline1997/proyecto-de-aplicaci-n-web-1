// Obtener una referencia al formulario y a los campos de entrada de correo electrónico, contraseña y confirmación de contraseña
const form = document.querySelector("form");
const emailInput = form.querySelector('input[name="email"]');
const passwordInput = form.querySelectorAll('input[name="password"]')[0];
const confirmPasswordInput = form.querySelectorAll('input[name="password"]')[1];

// Función para validar el formulario antes de enviar
function validateForm(event) {
  let isValid = true;

  // Validar el formato del correo electrónico
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    alert("Por favor, ingrese un correo electrónico válido.");
    isValid = false;
  }

  // Validar que la contraseña tenga al menos 6 dígitos
  if (passwordInput.value.trim().length < 6) {
    alert("La contraseña debe tener un mínimo de 6 dígitos.");
    isValid = false;
  }

  // Validar que la contraseña y la confirmación de contraseña coincidan
  if (passwordInput.value.trim() !== confirmPasswordInput.value.trim()) {
    alert("Las contraseñas no coinciden.");
    isValid = false;
  }

  // Prevenir el envío del formulario si hay errores de validación
  if (!isValid) {
    event.preventDefault();
  }
}

// Agregar un evento de escucha al formulario para validar al enviar
form.addEventListener("submit", validateForm);