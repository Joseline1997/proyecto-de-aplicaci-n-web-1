// Obtener una referencia al elemento de entrada de hora
var timePicker = document.getElementById("myTime");

// Función que se ejecuta cuando se cambia el valor del selector de hora
function onTimeChange() {
  // Dividir el valor de la entrada de hora en horas y minutos
  var timeSplit = timePicker.value.split(":"),
    hours,
    minutes,
    meridian;
  hours = timeSplit[0];
  minutes = timeSplit[1];

  // Determinar si es AM o PM y ajustar las horas en consecuencia
  if (hours > 12) {
    meridian = "PM";
    hours -= 12;
  } else if (hours < 12) {
    meridian = "AM";
    if (hours == 0) {
      hours = 12;
    }
  } else {
    meridian = "PM";
  }

  // Actualizar el elemento de visualización de la hora con el formato AM/PM
  document.getElementById("displayTime").innerHTML =
    hours + ":" + minutes + " " + meridian;
}