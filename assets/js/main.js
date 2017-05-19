function validateForm() {
	var boton = document.getElementById("suscripcion");
	var nombre = document.getElementById("nombre").value;
	var email = document.getElementById("email").value;
	var direccion = document.getElementById("address").value;

	if (nombre == "" || nombre == null) {
 		alert("Ingrese su nombre, por favor.");
 	} else if (!(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test(email))) {
 		alert("Ingrese un correo electrónico válido, por favor.");
 	} else if (direccion == "" || direccion == null) {
 		alert("Ingrese su dirección, por favor.");
 	} else if (!document.getElementById("selector").value) {
		alert("Escoge tu té favorito, por favor");
	} else {
		document.getElementById("nombre").value ="";
		document.getElementById("email").value = "";
		document.getElementById("address").value = "";
		document.getElementById("selector").value = "";	
		alert("Muchas gracias por enviar tus datos.");		
	}	
}