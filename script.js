function calcularEdad() {
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
      edad--;
    }
    document.getElementById('edad').value = edad;
  }

 
 
  

  function setFechaHoraActual() {
    const hoy = new Date();
    const dia = String(hoy.getDate()).padStart(2, '0');
    const mes = String(hoy.getMonth() + 1).padStart(2, '0'); // Los meses empiezan desde 0
    const año = hoy.getFullYear();
    const horas = String(hoy.getHours()).padStart(2, '0');
    const minutos = String(hoy.getMinutes()).padStart(2, '0');
    const segundos = String(hoy.getSeconds()).padStart(2, '0');
  
    const fechaHoraActual = `${dia}/${mes}/${año} ${horas}:${minutos}:${segundos}`;
    document.getElementById('fecha').value = fechaHoraActual;
  }
  
  // Actualizar la fecha y hora cada segundo
  function iniciarReloj() {
    setInterval(setFechaHoraActual, 1000); // Llama a la función cada 1000 ms (1 segundo)
  }
  
  // Establecer la fecha y hora actual al cargar la página
  window.onload = function () {
    setFechaHoraActual(); // Establece la fecha y hora inmediatamente
    iniciarReloj(); // Comienza el reloj en tiempo real
  };








     /* function cargarFechaActual() {
        var today = new Date();
        var day = ("0" + today.getDate()).slice(-2);
        var month = ("0" + (today.getMonth() + 1)).slice(-2);
        var todayString = today.getFullYear() + "-" + month + "-" + day;
        document.getElementById("fecha").value = todayString;
      }
  
      window.onload = function() {
        cargarFechaActual();
      }


      document.getElementById("BTNR").addEventListener("click", function() { setTimeout(cargarFechaActual, 0); });*/




 
 



document.getElementById('BTN').addEventListener('click', function(e) {
    e.preventDefault();
    var formData = new FormData(document.getElementById('form'));
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://script.google.com/macros/s/AKfycbwr2UjWx__WpOTPdNtkxIwxFzBOi_z6yzMyGsF4JP1APgQqW-KaKYO4z41jAKWYPWt2/exec');
    xhr.reload = function() {
      document.getElementById('form').reload(); 
     
    };
    xhr.send(formData);
    alert('¡Registro exitoso!');
    form.reset(); // Borrar los campos del formulario
  });



  function verificarContraseña() {
    var password = document.getElementById("password").value;
    if (password === "PQX") {
        document.getElementById("form").style.display = "block";
        document.getElementById("acceso").style.display = "none";
    } else {
        alert("Contraseña incorrecta");
    }
}













// Cambiar el formato de fecha a dd/mm/yyyy

const inputFechaIc = document.getElementById('proximoLlamadoOriginal');
const form = document.getElementById('form');

inputFechaIc.addEventListener('input', (e) => {
  const inputValue = inputFechaIc.value; // Obtiene el valor del input

  if (inputValue !== "") { // Verifica si el input no está vacío
    const [año, mes, dia] = inputValue.split('-'); // Divide la fecha en año, mes y día
    const fechaFormateada = `${dia}/${mes}/${año}`; // Formatea la fecha a dd/mm/aaaa

    // Crea un input oculto con el nombre "proximoLlamado" y el valor de la fecha formateada
    const existingHiddenproximoLlamadoOriginal = document.querySelector('input[name="proximoLlamado"]');
    if (existingHiddenproximoLlamadoOriginal) {
      existingHiddenproximoLlamadoOriginal.value = fechaFormateada;
    } else {
      const inputFechaOculta = document.createElement('input');
      inputFechaOculta.type = 'text'; // Establece el tipo en text
      inputFechaOculta.name = 'proximoLlamado';
      inputFechaOculta.value = fechaFormateada;
      inputFechaOculta.classList.add('oculto'); // Agrega la clase oculto
      inputFechaIc.parentNode.appendChild(inputFechaOculta);
    }
  } else {
    // Elimina el input oculto si el input original está vacío
    const existingHiddenproximoLlamadoOriginal = document.querySelector('input[name="proximoLlamado"]');
    if (existingHiddenproximoLlamadoOriginal) {
      existingHiddenproximoLlamadoOriginal.remove();
    }
  }
});
