// Obtenemos los elementos del formulario
const form = document.getElementById('registration-form');
const nombreInput = document.getElementById('nombre');
const apellidoInput = document.getElementById('apellido');
const correoInput = document.getElementById('correo');
const contrasenaInput = document.getElementById('contrasena');
const repetirContrasenaInput = document.getElementById('repetir-contrasena');

// Validamos los campos del formulario al enviar el formulario
form.addEventListener('submit', (event) => {
	// Validamos el campo de nombres
	if (nombreInput.value.trim() === '') {
		event.preventDefault();
		setErrorFor(nombreInput, 'El campo de nombres no puede estar vacío');
	} else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombreInput.value)) {
		event.preventDefault();
		setErrorFor(nombreInput, 'El campo de nombres solo puede contener letras y espacios');
	} else {
		setSuccessFor(nombreInput);
	}

	// Validamos el campo de apellidos
	if (apellidoInput.value.trim() === '') {
		event.preventDefault();
		setErrorFor(apellidoInput, 'El campo de apellidos no puede estar vacío');
	} else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(apellidoInput.value)) {
		event.preventDefault();
		setErrorFor(apellidoInput, 'El campo de apellidos solo puede contener letras y espacios');
	} else {
		setSuccessFor(apellidoInput);
	}

	// Validamos el campo de correo electrónico
	if (correoInput.value.trim() === '') {
		event.preventDefault();
		setErrorFor(correoInput, 'El campo de correo electrónico no puede estar vacío');
	} else if (!/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(correoInput.value)) {
		event.preventDefault();
		setErrorFor(correoInput, 'El campo de correo electrónico no es válido');
	} else {
		setSuccessFor(correoInput);
	}

	// Validamos el campo de contraseña
	if (contrasenaInput.value.trim() === '') {
		event.preventDefault();
		setErrorFor(contrasenaInput, 'El campo de contraseña no puede estar vacío');
	} else if (contrasenaInput.value.length < 6) {
		event.preventDefault();
		setErrorFor(contrasenaInput, 'El campo de contraseña debe tener al menos 6 caracteres');
	} else {
		setSuccessFor(contrasenaInput);
	}

	// Validamos el campo de repetir contraseña
	if (repetirContrasenaInput.value.trim() === '') {
		event.preventDefault();
		setErrorFor(repetirContrasenaInput, 'El campo de repetir contraseña no puede estar vacío');
	} else if (contrasenaInput.value !== repetirContrasenaInput.value) {
		event.preventDefault();
		setErrorFor(repetirContrasenaInput, 'Las contrasenas no coinciden');
	} else {
		setSuccessFor(repetirContrasenaInput);
	}
});

// Función para establecer un mensaje de error en un campo del formulario
function setErrorFor(input, message) {
	const errorSpan = input.nextElementSibling;
	errorSpan.innerText = message;
	input.classList.add('error');
}

// Función para establecer que un campo del formulario es válido
function setSuccessFor(input) {
	const errorSpan = input
    alert('EN HORA BUENA SUS DATOS HAN SIDO ENVIADOS!!.');
}