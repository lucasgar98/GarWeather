// --------- OBTENCIÓN DE LOS DATOS ACTUALES -----------
/* Función que obtiene la dirección del viento a partir del ángulo leído de ThingSpeak */
function obtenerDirViento(angDir) {
    let dir;
    switch(angDir){
        case 0: // Dirección N (0°)
            dir = "N";
            break;
        case 45: // Dirección NE (45°)
            dir = "NE";
            break;
        case 90: // Dirección E (90°)
            dir = "E";
            break;
        case 135: // Dirección SE (135°)
            dir = "SE";
            break;
        case 180: // Dirección S (180°)
            dir = "S";
            break;
        case 225: // Dirección SW (225°)
            dir = "SW";
            break;
        case 270: // Dirección W (270°)
            dir = "W";
            break;
        case 315: // Dirección NW (315°)
            dir = "NW";
            break;
        default: // Dirección indefinida
            dir = "N/D";
            break;
    }
    return dir;
}

/* Función que parsea la fecha y hora que devuelve ThingSpeak */
function parseDateTime(dateTime) {
    const timeZone = -3; // UTC-3 (zona horaria de Buenos Aires)
    /* La hora devuelta por ThingSpeak tiene el siguiente formato:
    "YYYY-MM-DDTHH:MM:SSZ"
    "2025-12-05T13:04:37Z"
    Por lo tanto, debemos parsear la fecha y la hora formando
    subcadenas para obtener el día, el mes y el año, y las horas,
    minutos y segundos */
    const year = dateTime.substring(0, 4);
    const month = dateTime.substring(5, 7);
    const day = dateTime.substring(8, 10);
    
    const hoursUTC = parseInt(dateTime.substring(11, 13));
    const hoursLocal = (hoursUTC + timeZone + 24) % 24;
    const minutes = dateTime.substring(14, 16);
    const seconds = dateTime.substring(17, 19);

    const dateTimeParsed = day + "/" + month + "/" + year + " " + hoursLocal + ":" + minutes + ":" + seconds;
    return dateTimeParsed;
}

/* Hacemos la consulta a la API ThingSpeak para obtener los datos actuales */
fetch("https://api.thingspeak.com/channels/2317526/feeds.json?api_key=VL73GBXA69XAZRSG&results=1")
    .then(r => r.json())
    .then(data => {
        const element = data.feeds[0];
        // Actualizamos la fecha y hora actuales
        document.getElementById("ultima-act").textContent = parseDateTime(element.created_at);
        // Actualizamos los valores de las diferentes variables
        document.getElementById("temp").textContent = parseFloat(element.field1).toFixed(1) + "°C";
        document.getElementById("hum").textContent = parseFloat(element.field2).toFixed(1) + "%";
        document.getElementById("pres").textContent = parseFloat(element.field4).toFixed(1) + " hPa";
        document.getElementById("dirv").textContent = obtenerDirViento(element.field7);
        document.getElementById("velv").textContent = parseFloat(element.field5).toFixed(1) + " km/h";
        document.getElementById("precip").textContent = parseFloat(element.field8).toFixed(1) + " mm";
    });

//---------- INICIO DE SESIÓN -----------
function defPaginaOrigen(){
    // Separamos la URL en subcadenas y accedemos al último elemento (página de origen)
    const URLFields = document.URL.split("/");
    // Definimos la página de origen
    if(URLFields[URLFields.length - 1].includes("index.html") == true){
        sessionStorage.setItem("origen", "index.html");
    }
    else if(URLFields[URLFields.length - 1].includes("contacto.html") == true){
        sessionStorage.setItem("origen", "contacto.html");
    }
    else if(URLFields[URLFields.length - 1].includes("nosotros.html") == true){
        sessionStorage.setItem("origen", "nosotros.html");
    }

}

function defPaginaDestino(linkClicked){
    // Separamos la URL en subcadenas y accedemos al último elemento (página de origen)
    const URLFields = document.URL.split("/");
    // Definimos la página de destino
    if(linkClicked == "Datos"){
        sessionStorage.setItem("destino", "datos.html");
    }
    else if(linkClicked == "Iniciar sesión"){
        if(URLFields[URLFields.length - 1].includes("index.html") == true){
            sessionStorage.setItem("destino", "index.html");
        }
        else if(URLFields[URLFields.length - 1].includes("contacto.html") == true){
            sessionStorage.setItem("destino", "contacto.html");
        }
        else if(URLFields[URLFields.length - 1].includes("nosotros.html") == true){
            sessionStorage.setItem("destino", "nosotros.html");
        }
    }

}

/* Definimos un evento que se dispara cuando se intenta ingresar a la sección de datos
sin haber iniciado sesión */
let linkDatos = document.getElementById("datos-link");
linkDatos.addEventListener("click", function() {
    let linkClicked = "Datos";
    // Definimos la página de origen
    defPaginaOrigen();
    // Verificamos si se inició sesión
    const sesionIniciada = sessionStorage.getItem("sesionIniciada");
    if(sesionIniciada == "true"){
        // Redirigimos a datos.html en caso que se haya iniciado sesión
        if(sessionStorage.getItem("origen") == "index.html"){
            window.location.href = "pages/datos.html";
        } else {
            window.location.href = "datos.html";
        }
    }
    else if(sesionIniciada == "false" || sesionIniciada == null) {
        // Definimos la página de destino
        defPaginaDestino(linkClicked);
        // Guardamos localmente el mensaje que vamos a mostrar por encima del formulario
        sessionStorage.setItem("msgLogin", "Para acceder a la sección de datos, debe iniciar sesión");
        // Redirigimos a login.html (página de inicio de sesión)
        if(sessionStorage.getItem("origen") == "index.html"){
            window.location.href = "pages/login.html";
        }
        else {
            window.location.href = "login.html";
        }
    }
});

/* Definimos un evento que se dispara cada vez que se presiona el enlace para
iniciar sesión */
let linkLogin = document.getElementById("login-link");
linkLogin.addEventListener("click", function(){
    let linkClicked = "Iniciar sesión";
    // Definimos la página de origen
    defPaginaOrigen();
    // Definimos la página de destino
    defPaginaDestino(linkClicked);
})

if(sessionStorage.getItem("sesionIniciada") == "true"){
    // Eliminamos el enlace para iniciar sesión y lo reemplazamos por un ícono junto al nombre de usuario
    document.getElementById("login-item").style.display = "none";
    // Mostramos el ícono de usuario
    document.getElementById("usr-container").style.display = "block";

    const usrName = document.getElementById("user-name");
    usrName.textContent = "lucasgar98";
    usrName.style = "font-weight: 800; font-size: 22px; font-family: 'Public Sans';";
}

//---------- VALIDACIÓN DE FORMULARIO DE CONTACTO -----------
// Función que muestra un mensaje de error encima del formulario de contacto
function mostrarError(message){
    // Accedemos al contenedor que se encuentra por encima del formulario
    let errorElement = document.getElementById("form-error");
    errorElement.textContent = "Error: ";
    errorElement.textContent += message;
    // Modificamos la propiedad display para mostrar el mensaje de error
    errorElement.style.display = "flex";
}

// Función que oculta el mensaje de error si el formulario es correcto
function ocultarError() {
    let errorElement = document.getElementById("form-error");
    //console.log("Usuario y contraseña válidos");
    // Modificamos la propiedad display para ocultar el mensaje de error
    errorElement.style.display = "none";
}

function validarForm(){
    // Obtenemos los valores ingresados por el usuario en los campos del formulario
    const name = document.getElementById("nombre").value;
    const email = document.getElementById("mail").value;
    const msg = document.getElementById("mensaje").value;

    let esValido = true; // Variable bandera que indica si el usuario y contraseña son válidos

    // Condicionales para validar
    if(name.length == 0){
        if(email.length == 0){
            if(msg.length == 0){
                // Nombre, email y mensaje vacíos
                mostrarError("Los campos del formulario no pueden estar vacíos");
                esValido = false;
            }
            else {
                // Nombre y email vacíos
                mostrarError("El nombre y el email no pueden estar vacíos");
                esValido = false;
            }
        }
        else {
            if(msg.length == 0){
                // Nombre y mensaje vacíos
                mostrarError("Nombre y mensaje vacíos")
                esValido = false;
            }
            else {
                // Nombre vacío
                mostrarError("Nombre vacío");
                esValido = false;
            }
        }
    }
    else if(email.length == 0){
        if(msg.length == 0){
            // Email y mensaje vacíos
            mostrarError("Email y mensaje vacíos");
            esValido = false;
        }
        else {
            // Email vacío
            mostrarError("Email vacío");
            esValido = false;
        }
    }
    else if(msg.length == 0){
        // Mensaje vacío
        mostrarError("Mensaje vacío");
        esValido = false;
    }
    else if(email.includes("@") == true){
        // Los campos están completos y la dirección de correo electrónico es válida
        ocultarError();
        esValido = true;
    }
    else {
        // Los campos están completos y la dirección de correo electrónico es inválida
        mostrarError("Email inválido (falta un @");
        esValido = false;
    }

    return esValido;
}

//---------- MENÚ HAMBURGUESA -----------
const btnHamburguesa = document.getElementById("boton-hamburguesa");
const listEnlaces = document.getElementById("list-enlaces");

btnHamburguesa.addEventListener("click", function() {
    console.log("Click sobre el menú hamburguesa");
    listEnlaces.classList.toggle("active");
});

//---------- MENÚ DE USUARIO -----------
const btnUsuario = document.getElementById("bot-usuario");
const menuUsuario = document.getElementById("user-menu");

btnUsuario.addEventListener("click", function() {
    menuUsuario.classList.toggle("active");
});

document.addEventListener("click", (event) => {
    if (!menuUsuario.contains(event.target) && !btnUsuario.contains(event.target)) {
        menuUsuario.classList.remove("active");
    }
    
    if(!listEnlaces.contains(event.target) && !btnHamburguesa.contains(event.target)){
        listEnlaces.classList.remove("active");
    }
});

const btnLogout = document.getElementById("logout-link");
btnLogout.addEventListener("click", function() {
    sessionStorage.setItem("sesionIniciada", "false");
    // Ocultamos el contenedor del ícono de usuario al cerrar sesión
    document.getElementById("usr-container").style.display = "none";
    // Mostramos la opción de inicio de sesión
    document.getElementById("login-item").style.display = "block";
})

/* Definimos un evento que se dispara cada vez que se envía el formulario */
const formContacto = document.getElementById("form-contacto");
formContacto.addEventListener("submit", function(event) {
    event.preventDefault();
    if(validarForm() == false){
        alert("Formulario inválido");
    }
    else {
        event.target.submit();
    }

});