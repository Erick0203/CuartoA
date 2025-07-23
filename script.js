document.getElementById('btnEnviar').addEventListener('click', function () {
  // Variables
  let nombre = document.getElementById("nombre").value;
  let cedula = document.getElementById("cedula").value;
  let correo = document.getElementById("correo").value;
  let edad = parseInt(document.getElementById("edad").value);
  let fecha = document.getElementById("fecha").value;
  let genero = document.getElementById("genero").value;
  let telefono = document.getElementById("telefono").value;
  let nivel = document.getElementById("nivel").value;
  let tema = document.getElementById("tema").value;
  let proyecto = document.getElementById("proyecto").value;
  let componentes = document.getElementById("componentes").value.split(",");
  let conocimientosElectronica = document.querySelector('input[name="electronica"]:checked').value;
  let aceptaTerminos = document.getElementById("terminos").checked;

  // Validaciones
  if (!nombre || !cedula || !correo || isNaN(edad) || !telefono) {
    alert("Por favor, completa todos los campos obligatorios.");
    return;
  }

  if (!aceptaTerminos) {
    alert("Debes aceptar los términos y condiciones.");
    return;
  }

  if (edad < 18) {
    alert("Debes tener al menos 18 años para inscribirte.");
    return;
  }

  // Mensaje de confirmación
  alert(`✅ Registro exitoso:
🧑 Nombre: ${nombre}
💳 Cédula: ${cedula}
📧 Correo: ${correo}
📆 Fecha de nacimiento: ${fecha}
💬 Género: ${genero}
📞 Teléfono: ${telefono}
📊 Nivel: ${nivel}
🧠 Tema de interés: ${tema}
📝 Proyecto: ${proyecto}
🔌 Electrónica: ${conocimientosElectronica}
🧩 Componentes: ${componentes.join(", ").trim()}`);
});
