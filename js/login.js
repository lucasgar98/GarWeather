//---------- VALIDACIÓN DEL FORMULARIO DE INICIO DE SESIÓN -----------
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

/* Función que busca el nombre de usuario en el almacenamiento local (localStorage) */
function buscarUsuario(nombre, contraseña){
    let usuarioEncontrado;
    // Buscamos el nombre de usuario y la contraseña en el localStorage
    const usuarios = JSON.parse(localStorage.getItem("cuenta-usuario"));

    if(usuarios != null){
        if(usuarios.length == undefined){
            if(usuarios.usuario == nombre){
                if(usuarios.contraseña == contraseña){
                    // Usuario y contraseña válidos
                    usuarioEncontrado = true;
                }
                else {
                    // Usuario válido, contraseña inválida
                    mostrarError("La contraseña es incorrecta");
                    return false;
                }
            }
            else {
                // El usuario no existe
                mostrarError("El usuario no existe");
                return false;
            }
        }
        else if(usuarios.length > 1) {
            for(let i=0; i<usuarios.length; i++){
                if(usuarios[i].usuario == nombre){
                    if(usuarios[i].contraseña == contraseña){
                        // Usuario y contraseña válidos
                        usuarioEncontrado = true;
                    }
                    else {
                        // Usuario válido, contraseña inválida
                        mostrarError("La contraseña es incorrecta");
                        return false;
                    }
                }
            }
        }
    }
    else {
        usuarioEncontrado = false;
    }

    if(usuarioEncontrado == true){
        ocultarError();
        return true;
    }
    else {
        mostrarError("El usuario no existe");
        return false;
    }

}

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
    esValido = buscarUsuario(usrName, usrPass);
    return esValido;
}

// Mostramos el mensaje por encima del formulario de inicio de sesión
if(document.URL.includes("login.html")){
    const msgLogin = sessionStorage.getItem("msgLogin");
    if(msgLogin) {
        let txtLogin = document.getElementById("txt-login");
        txtLogin.innerHTML = `<h2>${msgLogin}</h2> `;
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
            // Obtenemos la página de destino
            //const origen = sessionStorage.getItem("origen");
            const destino = sessionStorage.getItem("destino");
            // Definimos la página que se abrirá al presionar el botón acceder, según la página de destino
            if(destino == "datos.html"){
                window.location.href = "../pages/datos.html";
            }
            else if(destino == "index.html"){
                window.location.href = "../index.html";
            }
            else if(destino == "contacto.html"){
                window.location.href = "../pages/contacto.html";
            }
            else if(destino == "nosotros.html"){
                window.location.href = "../pages/nosotros.html";
            }
            
            sessionStorage.setItem("sesionIniciada", "true");
        }
    });

    /* Evento que se dispara al presionar el botón de crear cuenta */
    const btnSignUp = document.getElementById("but-signup");
    btnSignUp.addEventListener("click", function(event) {
        event.preventDefault(); // Evitamos que el documento HTML maneje el evento por defecto
        window.location.href = "signup.html";
    });
}