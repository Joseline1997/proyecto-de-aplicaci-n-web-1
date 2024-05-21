// Obtener referencias a los elementos del formulario
const form = document.querySelector("form");
const nameInput = form.querySelector('input[placeholder="Nombre"]');
const idInput = form.querySelector('input[placeholder="Numero de cédula"]');
const daySelect = form.querySelector("select");
const timeInput = form.querySelector("#myTime");
const detailsTextarea = form.querySelector("textarea");

// Función para validar el formulario antes de enviar
function validateForm(event) {
  let isValid = true;

  // Validar que se haya ingresado un nombre
  if (nameInput.value.trim() === "") {
    alert("Por favor, ingrese su nombre.");
    isValid = false;
  }

  // Validar el formato del número de cédula (10 dígitos)
  const cedulaRegex = /^\d{10}$/;
  if (!cedulaRegex.test(idInput.value.trim())) {
    alert("Por favor, ingrese un número de cédula válido de 10 dígitos.");
    isValid = false;
  }

  // Validar que se haya ingresado una hora
  if (timeInput.value.trim() === "") {
    alert("Por favor, ingrese una hora.");
    isValid = false;
  }

  // Validar que se hayan ingresado detalles
  if (detailsTextarea.value.trim() === "") {
    alert("Por favor, ingrese los detalles.");
    isValid = false;
  }

  // Prevenir el envío del formulario si hay errores de validación
  if (!isValid) {
    event.preventDefault();
  }
}

// Agregar un evento de escucha al formulario para validar al enviar
form.addEventListener("submit", validateForm);
