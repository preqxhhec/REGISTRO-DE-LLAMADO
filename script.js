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
    xhr.open('POST', 'https://script.google.com/macros/s/AKfycbxgYcxrG3YcIXA1A70IFGRsm_gtibZn0cjKdeoQ05zdbO7rY0xttZ-xydQGyB8CHJg3/exec');
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













const inputFecha = document.getElementById('proximoLlamadoOriginal');

inputFecha.addEventListener('input', (e) => {
  const fecha = new Date(inputFecha.value);
  const dia = fecha.getDate().toString().padStart(2, '0');
  const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
  const año = fecha.getFullYear();

  const inputFechaOculta = document.createElement('input');
  inputFechaOculta.type = 'hidden';
  inputFechaOculta.name = 'proximoLlamado';
  inputFechaOculta.value = `${dia}/${mes}/${año}`;
  inputFecha.parentNode.appendChild(inputFechaOculta);
});
