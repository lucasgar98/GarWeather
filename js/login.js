//---------- VALIDACIÓN DEL FORMULARIO DE INICIO DE SESIÓN -----------
// Definimos el usuario y contraseña válidos de forma "hardcodeada"
const usrVal = "lucasgar98";
const passVal = "REINAquerida2025";

// Función para validar los datos ingresados por el usuario al iniciar sesión
function validarLogin() {
    // Obtenemos los valores ingresados por el usuario al iniciar sesión
    const usrName = document.getElementById("usuario").value;
    const usrPass = document.getElementById("contraseña").value;

    let esValido = true; // Variable bandera que indica si el usuario y contraseña son válidos

    // Condicionales para validar
    if(usrName.length < 1 && usrPass.length < 1){
        // Nombre de usuario y contraseña vacíos
        mostrarError("El nombre de usuario y la contraseña no pueden estar vacíos");
        esValido = false;
    }
    else if(usrName.length < 1){
        // Nombre de usuario vacío
        mostrarError("El nombre de usuario no puede estar vacío");
        esValido = false;
    }
    else if(usrPass.length < 1){
        // Contraseña vacía
        mostrarError("La contraseña no puede estar vacía");
        esValido = false;
    }
    else if(usrName != usrVal || usrPass != passVal){
        // Usuario o contraseña inválidos
        mostrarError("Credenciales inválidas");
        esValido = false;
    }
    else if(usrName == usrVal && usrPass == passVal){
        // Usuario y contraseña válidos
        ocultarError();
        esValido = true;
    }

    return esValido;
}

// Función que muestra un mensaje de error encima del formulario
function mostrarError(message){
    // Accedemos al contenedor que se encuentra por encima del formulario
    let errorElement = document.getElementById("login-error");
    errorElement.textContent = "Error al iniciar sesión: ";
    errorElement.textContent += message;
    //console.log(message);
    // Modificamos la propiedad display para mostrar el mensaje de error
    errorElement.style.display = "flex";
}

// Función que oculta el mensaje de error si las credenciales son válidas
function ocultarError() {
    let errorElement = document.getElementById("login-error");
    //console.log("Usuario y contraseña válidos");
    // Modificamos la propiedad display para ocultar el mensaje de error
    errorElement.style.display = "none";
}

// Mostramos el mensaje por encima del formulario de inicio de sesión 
const msgLogin = sessionStorage.getItem("msgLogin");
if(msgLogin) {
    document.getElementById("txt-login").textContent = msgLogin;
    // Borramos el mensaje para que no reaparezca
    sessionStorage.removeItem("msgLogin");
}

/* Definimos un evento que se dispara cada vez que se presiona el botón acceder.
Cuando se dispara este evento, se realiza la validación del formulario */
let btnAcceder = document.getElementById("but-login");
btnAcceder.addEventListener("click", function(event) {
    event.preventDefault(); // Evitamos que el documento HTML maneje el evento por defecto
    //console.log("Botón Acceder presionado");
    if(validarLogin()){
        // Obtenemos la página de origen y la página de destino
        const origen = sessionStorage.getItem("origen");
        const destino = sessionStorage.getItem("destino");
        // Definimos la página que se abrirá al presionar el botón acceder, según la página de origen
        if(origen == "index.html"){
            if(destino == "datos.html"){
                window.location.href = "../pages/datos.html";
            } else {
                window.location.href = "../index.html";
            }
        }
        sessionStorage.setItem("sesionIniciada", "true");
    }
});