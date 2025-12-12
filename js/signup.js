//---------- VALIDACIÓN DEL FORMULARIO DE CREAR NUEVA CUENTA -----------

function mostrarError(item, msg){
    let errorItem = document.getElementById(item);
    errorItem.style.display = "block";
    errorItem.textContent = msg;
}

function ocultarError(item){
    let errorItem = document.getElementById(item);
    errorItem.style.display = "none";
}

// Función para validar los datos ingresados por el usuario al crear una nueva cuenta
function validarSignup() {

    // Obtenemos los valores ingresados por el usuario al registrarse
    const usrNombre = document.getElementById("usuario").value;
    const usrPass = document.getElementById("contraseña").value;
    const usrEmail = document.getElementById("email").value;
    const usrNombreReal = document.getElementById("nombre").value;
    const usrApellido = document.getElementById("apellido").value;
    const usrProfesion = document.getElementById("profesion").value;

    let esValido = false; // Variable bandera que indica si los datos son válidos

    /* Condicionales para validar. Se deben validar 6 campos en total (nombre de usuario,
    contraseña, dirección de correo, nombre, apellido y profesión). Primero debemos verificar
    que los campos no estén vacíos, para lo cual consultamos la propiedad length de cada variable.
    Luego, verificamos que la contraseña tenga como mínimo 8 caracteres y que la dirección de correo
    contenga un @ */
    if(usrNombre.length == 0){
        if(usrPass.length == 0){
            if(usrEmail == 0){
                if(usrNombreReal.length == 0){
                    if(usrApellido.length == 0){
                        if(usrProfesion.length == 0){
                            // Nombre de usuario, contraseña, email, nombre, apellido y profesión vacíos
                            mostrarError("error-usuario", "Falta el usuario");
                            mostrarError("error-contraseña", "Falta la contraseña");
                            mostrarError("error-email", "Falta el email");
                            mostrarError("error-nombre", "Falta el nombre");
                            mostrarError("error-apellido", "Falta el apellido");
                            mostrarError("error-profesion", "Falta la profesion");
                        }
                        else {
                            // Nombre de usuario, contraseña, email, nombre y apellido vacíos
                            mostrarError("error-usuario", "Falta el usuario");
                            mostrarError("error-contraseña", "Falta la contraseña");
                            mostrarError("error-email", "Falta la dirección de correo");
                            mostrarError("error-nombre", "Falta el nombre");
                            mostrarError("error-apellido", "Falta el apellido");
                            ocultarError("error-profesion");
                        }
                    }
                    else {
                        if(usrProfesion.length == 0){
                            // Nombre de usuario, contraseña, email, nombre y profesión vacíos
                            mostrarError("error-usuario", "Falta el usuario");
                            mostrarError("error-contraseña", "Falta la contraseña");
                            mostrarError("error-email", "Falta la dirección de correo");
                            mostrarError("error-nombre", "Falta el nombre");
                            mostrarError("error-profesion", "Falta la profesión");
                            ocultarError("error-apellido");              
                        }
                        else {
                            // Nombre de usuario, contraseña, email y nombre vacíos
                            mostrarError("error-usuario", "Falta el usuario");
                            mostrarError("error-contraseña", "Falta la contraseña");
                            mostrarError("error-email", "Falta la dirección de correo");
                            mostrarError("error-nombre", "Falta el nombre");
                            ocultarError("error-apellido");
                            ocultarError("error-profesion");                          
                        }
                    }
                }
                else {
                    if(usrApellido.length == 0){
                        if(usrProfesion.length == 0){
                            // Nombre de usuario, contraseña, email, apellido y profesión vacíos
                            mostrarError("error-usuario", "Falta el usuario");
                            mostrarError("error-contraseña", "Falta la contraseña");
                            mostrarError("error-email", "Falta la dirección de correo");
                            mostrarError("error-apellido", "Falta el apellido");
                            mostrarError("error-profesion", "Falta la profesión");
                            ocultarError("error-nombre");            
                        }
                        else {
                            // Nombre de usuario, contraseña, email y apellido vacíos
                            mostrarError("error-usuario", "Falta el usuario");
                            mostrarError("error-contraseña", "Falta la contraseña");
                            mostrarError("error-email", "Falta la dirección de correo");
                            mostrarError("error-apellido", "Falta el apellido");  
                            ocultarError("error-nombre");
                            ocultarError("error-profesion");                 
                        }
                    }
                    else {
                        if(usrProfesion.length == 0){
                            // Nombre de usuario, contraseña, email y profesión vacíos
                            mostrarError("error-usuario", "Falta el usuario");
                            mostrarError("error-contraseña", "Falta la contraseña");
                            mostrarError("error-email", "Falta la dirección de correo");
                            mostrarError("error-profesion", "Falta la profesión");
                            ocultarError("error-nombre");
                            ocultarError("error-apellido");                     
                        }
                        else {
                            // Nombre de usuario, contraseña e email vacíos
                            mostrarError("error-usuario", "Falta el usuario");
                            mostrarError("error-contraseña", "Falta la contraseña");
                            mostrarError("error-email", "Falta la dirección de correo");           
                            ocultarError("error-nombre");
                            ocultarError("error-apellido");
                            ocultarError("error-profesion");
                        }
                    }
                }
            }
            else {
                if(usrNombreReal.length == 0){
                    if(usrApellido.length == 0){
                        if(usrProfesion == 0){
                            // Nombre de usuario, contraseña, nombre, apellido y profesión vacíos
                            mostrarError("error-usuario", "Falta el usuario");
                            mostrarError("error-contraseña", "Falta la contraseña");
                            mostrarError("error-nombre", "Falta el nombre");
                            mostrarError("error-apellido", "Falta el apellido");
                            mostrarError("error-profesion", "Falta la profesión");
                            ocultarError("error-email");
                        }
                        else {
                            // Nombre de usuario, contraseña, nombre y apellido vacíos
                            mostrarError("error-usuario", "Falta el usuario");
                            mostrarError("error-contraseña", "Falta la contraseña");
                            mostrarError("error-nombre", "Falta el nombre");
                            mostrarError("error-apellido", "Falta el apellido");
                            ocultarError("error-email");
                            ocultarError("error-profesion");
                        }
                    }
                    else {
                        if(usrProfesion == 0){
                            // Nombre de usuario, contraseña, nombre y profesión vacíos
                            mostrarError("error-usuario", "Falta el usuario");
                            mostrarError("error-contraseña", "Falta la contraseña");
                            mostrarError("error-nombre", "Falta el nombre");
                            mostrarError("error-profesion", "Falta la profesión");
                            ocultarError("error-email");
                            ocultarError("error-apellido");                    
                        }
                        else {
                            // Nombre de usuario, contraseña y nombre vacíos
                            mostrarError("error-usuario", "Falta el usuario");
                            mostrarError("error-contraseña", "Falta la contraseña");
                            mostrarError("error-nombre", "Falta el nombre");
                            ocultarError("error-email");
                            ocultarError("error-apellido");
                            ocultarError("error-profesion");
                        }
                    }
                }
                else {
                    if(usrApellido.length == 0){
                        if(usrProfesion.length == 0){
                            // Nombre de usuario, contraseña, apellido y profesión vacíos
                            mostrarError("error-usuario", "Falta el usuario");
                            mostrarError("error-contraseña", "Falta la contraseña");
                            mostrarError("error-apellido", "Falta el apellido");
                            mostrarError("error-profesion", "Falta la profesión");
                            ocultarError("error-email");
                            ocultarError("error-nombre");               
                        }
                        else {
                            // Nombre de usuario, contraseña y apellido vacíos
                            mostrarError("error-usuario", "Falta el usuario");
                            mostrarError("error-contraseña", "Falta la contraseña");
                            mostrarError("error-apellido", "Falta el apellido");
                            ocultarError("error-email");
                            ocultarError("error-nombre");
                            ocultarError("error-profesion");                    
                        }
                    }
                    else {
                        if(usrProfesion.length == 0){
                            // Nombre de usuario, contraseña y profesión vacíos
                            mostrarError("error-usuario", "Falta el usuario");
                            mostrarError("error-contraseña", "Falta la contraseña");
                            mostrarError("error-profesion", "Falta la profesión");
                            ocultarError("error-email");
                            ocultarError("error-nombre");
                            ocultarError("error-apellido");          
                        }
                        else {
                            // Nombre de usuario y contraseña vacíos
                            mostrarError("error-usuario", "Falta el usuario");
                            mostrarError("error-contraseña", "Falta la contraseña");
                            ocultarError("error-email");
                            ocultarError("error-nombre");
                            ocultarError("error-apellido");
                            ocultarError("error-profesion");               
                        }
                    }
                }
            }
        }
        else {
            if(usrEmail.length == 0){
                if(usrNombreReal.length == 0){
                    if(usrApellido.length == 0){
                        if(usrProfesion.length == 0){
                            // Nombre de usuario, email, nombre, apellido y profesión vacíos
                            mostrarError("error-usuario", "Falta el usuario");
                            mostrarError("error-email", "Falta la dirección de correo");
                            mostrarError("error-nombre", "Falta el nombre");
                            mostrarError("error-apellido", "Falta el apellido");
                            mostrarError("error-profesion", "Falta la profesión");
                            ocultarError("error-contraseña");
                        }
                        else {
                            // Nombre de usuario, email, nombre, apellido vacíos
                            mostrarError("error-usuario", "Falta el usuario");
                            mostrarError("error-email", "Falta la dirección de correo");
                            mostrarError("error-nombre", "Falta el nombre");
                            mostrarError("error-apellido", "Falta el apellido");
                            ocultarError("error-contraseña");
                            ocultarError("error-profesion");                        
                        }
                    }
                    else {
                        if(usrProfesion.length == 0){
                            // Nombre de usuario, email, nombre y profesión vacíos
                            mostrarError("error-usuario", "Falta el usuario");
                            mostrarError("error-email", "Falta la dirección de correo");
                            mostrarError("error-nombre", "Falta el nombre");
                            mostrarError("error-profesion", "Falta la profesión");
                            ocultarError("error-contraseña");
                            ocultarError("error-apellido");               
                        }
                        else {
                            // Nombre de usuario, email, nombre vacíos
                            mostrarError("error-usuario", "Falta el usuario");
                            mostrarError("error-email", "Falta la dirección de correo");
                            mostrarError("error-nombre", "Falta el nombre");
                            ocultarError("error-contraseña");
                            ocultarError("error-apellido");
                            ocultarError("error-profesion");
                        }
                    }
                }
                else {
                    if(usrApellido.length == 0){
                        if(usrProfesion.length == 0){
                            // Nombre de usuario, email, apellido y profesión vacíos
                            mostrarError("error-usuario", "Falta el usuario");
                            mostrarError("error-email", "Falta la dirección de correo");
                            mostrarError("error-apellido", "Falta el apellido");
                            mostrarError("error-profesion", "Falta la profesión");
                            ocultarError("error-contraseña");
                            ocultarError("error-nombre");
                        }
                        else {
                            // Nombre de usuario, email, apellido vacíos
                            mostrarError("error-usuario", "Falta el usuario");
                            mostrarError("error-email", "Falta la dirección de correo");
                            mostrarError("error-apellido", "Falta el apellido");
                            ocultarError("error-contraseña");
                            ocultarError("error-nombre");
                            ocultarError("error-profesion");                          
                        }
                    }
                    else {
                        if(usrProfesion.length == 0){
                            // Nombre de usuario, email y profesión vacíos
                            mostrarError("error-usuario", "Falta el usuario");
                            mostrarError("error-email", "Falta la dirección de correo");
                            mostrarError("error-profesion", "Falta la profesión");
                            ocultarError("error-contraseña");
                            ocultarError("error-nombre");
                            ocultarError("error-apellido");                       
                        }
                        else {
                            // Nombre de usuario, email vacíos
                            mostrarError("error-usuario", "Falta el usuario");
                            mostrarError("error-email", "Falta la dirección de correo");
                            ocultarError("error-contraseña");
                            ocultarError("error-profesion");
                            ocultarError("error-nombre");
                            ocultarError("error-apellido");
                        }
                    }
                }
            }
            else {
                if(usrNombreReal.length == 0){
                    if(usrApellido.length == 0){
                        if(usrProfesion.length == 0){
                            // Nombre de usuario, nombre, apellido y profesión vacíos
                            mostrarError("error-usuario", "Falta el usuario");
                            mostrarError("error-nombre", "Falta el nombre");
                            mostrarError("error-apellido", "Falta el apellido");
                            mostrarError("error-profesion", "Falta la profesión");
                            ocultarError("error-email");
                            ocultarError("error-contraseña");
                        }
                        else {
                            // Nombre de usuario, nombre, apellido vacíos
                            mostrarError("error-usuario", "Falta el usuario");
                            mostrarError("error-nombre", "Falta el nombre");
                            mostrarError("error-apellido", "Falta el apellido");
                            ocultarError("error-email");
                            ocultarError("error-contraseña");
                            ocultarError("error-profesion");                           
                        }
                    }
                    else {
                        if(usrProfesion.length == 0){
                            // Nombre de usuario, nombre, profesión vacíos
                            mostrarError("error-usuario", "Falta el usuario");
                            mostrarError("error-nombre", "Falta el nombre");
                            mostrarError("error-profesion", "Falta la profesión");
                            ocultarError("error-email");
                            ocultarError("error-contraseña");
                            ocultarError("error-apellido");          
                        }
                        else {
                            // Nombre de usuario y nombre vacíos
                            mostrarError("error-usuario", "Falta el usuario");
                            mostrarError("error-nombre", "Falta el nombre");
                            ocultarError("error-email");
                            ocultarError("error-contraseña");
                            ocultarError("error-profesion");
                            ocultarError("error-apellido");                        
                        }
                    }
                }
                else {
                    if(usrApellido.length == 0){
                        if(usrProfesion.length == 0){
                            // Nombre de usuario, apellido y profesión vacíos
                            mostrarError("error-usuario", "Falta el usuario");
                            mostrarError("error-apellido", "Falta el apellido");
                            mostrarError("error-profesion", "Falta la profesión");
                            ocultarError("error-email");
                            ocultarError("error-contraseña");
                            ocultarError("error-nombre");                       
                        }
                        else {
                            // Nombre de usuario, apellido vacíos
                            mostrarError("error-usuario", "Falta el usuario");
                            mostrarError("error-apellido", "Falta el apellido");
                            ocultarError("error-email");
                            ocultarError("error-contraseña");
                            ocultarError("error-profesion");
                            ocultarError("error-nombre");                        
                        }
                    }
                    else {
                        if(usrProfesion.length == 0){
                            // Nombre de usuario y profesión vacíos
                            mostrarError("error-usuario", "Falta el usuario");
                            mostrarError("error-profesion", "Falta la profesión"); 
                            ocultarError("error-email");
                            ocultarError("error-contraseña");
                            ocultarError("error-apellido");
                            ocultarError("error-nombre");              
                        }
                        else {
                            // Nombre de usuario vacío
                            mostrarError("error-usuario", "Falta el usuario");
                            ocultarError("error-email");
                            ocultarError("error-contraseña");
                            ocultarError("error-profesion");
                            ocultarError("error-apellido");
                            ocultarError("error-nombre"); 
                        }
                    }
                }
            }
        }
    }
    else if(usrPass.length == 0){
        if(usrEmail.length == 0){
            if(usrNombreReal.length == 0){
                if(usrApellido.length == 0){
                    if(usrProfesion.length == 0){
                        // Contraseña, email, nombre, apellido y profesión vacíos
                        mostrarError("error-contraseña", "Falta la contraseña");
                        mostrarError("error-email", "Falta la dirección de correo");
                        mostrarError("error-nombre", "Falta el nombre");
                        mostrarError("error-apellido", "Falta el apellido");
                        mostrarError("error-profesion", "Falta la profesión");
                        ocultarError("error-usuario");
                    }
                    else {
                        // Contraseña, email, nombre, apellido vacíos
                        mostrarError("error-contraseña", "Falta la contraseña");
                        mostrarError("error-email", "Falta la dirección de correo");
                        mostrarError("error-nombre", "Falta el nombre");
                        mostrarError("error-apellido", "Falta el apellido");                        
                        ocultarError("error-usuario");
                        ocultarError("error-profesion");
                    }
                }
                else {
                    if(usrProfesion.length == 0){
                        // Contraseña, email, nombre, profesión vacíos
                        mostrarError("error-contraseña", "Falta la contraseña");
                        mostrarError("error-email", "Falta la dirección de correo");
                        mostrarError("error-nombre", "Falta el nombre");
                        mostrarError("error-profesion", "Falta la profesión");                        
                        ocultarError("error-usuario");
                        ocultarError("error-apellido");
                    }
                    else {
                        // Contraseña, email, nombre vacíos
                        mostrarError("error-contraseña", "Falta la contraseña");
                        mostrarError("error-email", "Falta la dirección de correo");
                        mostrarError("error-nombre", "Falta el nombre");
                        ocultarError("error-usuario");
                        ocultarError("error-apellido");
                        ocultarError("error-profesion");
                    }
                }
            }
            else {
                if(usrApellido.length == 0){
                    if(usrProfesion.length == 0){
                        // Contraseña, email, apellido y profesión vacíos
                        mostrarError("error-contraseña", "Falta la contraseña");
                        mostrarError("error-email", "Falta la dirección de correo");
                        mostrarError("error-apellido", "Falta el apellido");
                        mostrarError("error-profesion", "Falta la profesión");                        
                        ocultarError("error-usuario");
                        ocultarError("error-nombre");
                    }
                    else {
                        // Contraseña, email, apellido vacíos
                        mostrarError("error-contraseña", "Falta la contraseña");
                        mostrarError("error-email", "Falta la dirección de correo");
                        mostrarError("error-apellido", "Falta el apellido");                        
                        ocultarError("error-usuario");
                        ocultarError("error-profesion");
                        ocultarError("error-nombre");
                    }
                }
                else {
                    if(usrProfesion.length == 0){
                        // Contraseña, email y profesión vacíos
                        mostrarError("error-contraseña", "Falta la contraseña");
                        mostrarError("error-email", "Falta la dirección de correo");
                        mostrarError("error-profesion", "Falta la profesión");
                        ocultarError("error-usuario");
                        ocultarError("error-apellido");
                        ocultarError("error-nombre");
                    }
                    else {
                        // Contraseña, email vacíos
                        mostrarError("error-contraseña", "Falta la contraseña");
                        mostrarError("error-email", "Falta la dirección de correo");                        
                        ocultarError("error-usuario");
                        ocultarError("error-apellido");
                        ocultarError("error-profesion");
                        ocultarError("error-nombre");
                    }
                }
            }
        }
        else {
            if(usrNombreReal.length == 0){
                if(usrApellido.length == 0){
                    if(usrProfesion.length == 0){
                        // Contraseña, nombre, apellido y profesión vacíos
                        mostrarError("error-contraseña", "Falta la contraseña");
                        mostrarError("error-nombre", "Falta el nombre");
                        mostrarError("error-apellido", "Falta el apellido");
                        mostrarError("error-profesion", "Falta la profesión");
                        ocultarError("error-usuario");
                        ocultarError("error-email");
                    }
                    else {
                        // Contraseña, nombre, apellido vacíos
                        mostrarError("error-contraseña", "Falta la contraseña");
                        mostrarError("error-nombre", "Falta el nombre");
                        mostrarError("error-apellido", "Falta el apellido");                        
                        ocultarError("error-usuario");
                        ocultarError("error-profesion");
                        ocultarError("error-email");
                    }
                }
                else {
                    if(usrProfesion.length == 0){
                        // Contraseña, nombre y profesión vacíos
                        mostrarError("error-contraseña", "Falta la contraseña");
                        mostrarError("error-nombre", "Falta el nombre");
                        mostrarError("error-profesion", "Falta la profesión");                    
                        ocultarError("error-usuario");
                        ocultarError("error-apellido");
                        ocultarError("error-email");
                    }
                    else {
                        // Contraseña, nombre vacíos
                        mostrarError("error-contraseña", "Falta la contraseña");
                        mostrarError("error-nombre", "Falta el nombre");
                        ocultarError("error-usuario");
                        ocultarError("error-apellido");
                        ocultarError("error-profesion");
                        ocultarError("error-email");
                    }
                }
            }
            else {
                if(usrApellido.length == 0){
                    if(usrProfesion.length == 0){
                        // Contraseña, apellido y profesión vacíos
                        mostrarError("error-contraseña", "Falta la contraseña");
                        mostrarError("error-apellido", "Falta el apellido");
                        mostrarError("error-profesion", "Falta la profesión");                        
                        ocultarError("error-usuario");
                        ocultarError("error-email");
                        ocultarError("error-nombre");
                    }
                    else {
                        // Contraseña, apellido vacíos
                        mostrarError("error-contraseña", "Falta la contraseña");
                        mostrarError("error-apellido", "Falta el apellido");                        
                        ocultarError("error-usuario");
                        ocultarError("error-profesion");
                        ocultarError("error-email");
                        ocultarError("error-nombre");
                    }
                }
                else {
                    if(usrProfesion.length == 0){
                        // Contraseña y profesión vacíos
                        mostrarError("error-contraseña", "Falta la contraseña");
                        mostrarError("error-profesion", "Falta la profesión");                         
                        ocultarError("error-usuario");
                        ocultarError("error-apellido");
                        ocultarError("error-email");
                        ocultarError("error-nombre");
                    }
                    else {
                        // Contraseña vacía
                        mostrarError("error-contraseña", "Falta la contraseña");
                        ocultarError("error-usuario");
                        ocultarError("error-apellido");
                        ocultarError("error-profesion");
                        ocultarError("error-email");
                        ocultarError("error-nombre");
                    }
                }
            }
        }
    }
    else if(usrEmail.length == 0){
        if(usrNombreReal.length == 0){
            if(usrApellido.length == 0){
                if(usrProfesion.length == 0){
                    // Email, nombre, apellido y profesión vacíos
                    mostrarError("error-email", "Falta la dirección de correo");
                    mostrarError("error-nombre", "Falta el nombre");
                    mostrarError("error-apellido", "Falta el apellido");
                    mostrarError("error-profesion", "Falta la profesión");
                    ocultarError("error-usuario");
                    ocultarError("error-contraseña");
                }
                else {
                    // Email, nombre, apellido vacíos
                    mostrarError("error-email", "Falta la dirección de correo");
                    mostrarError("error-nombre", "Falta el nombre");
                    mostrarError("error-apellido", "Falta el apellido");                    
                    ocultarError("error-usuario");
                    ocultarError("error-contraseña");
                    ocultarError("error-profesion");
                }
            }
            else {
                if(usrProfesion.length == 0){
                    // Email, nombre y profesión vacíos
                    mostrarError("error-email", "Falta la dirección de correo");
                    mostrarError("error-nombre", "Falta el nombre");
                    mostrarError("error-profesion", "Falta la profesión");     
                    ocultarError("error-usuario");
                    ocultarError("error-contraseña");
                    ocultarError("error-apellido");
                }
                else {
                    // Email y nombre vacíos
                    mostrarError("error-email", "Falta la dirección de correo");
                    mostrarError("error-nombre", "Falta el nombre");                    
                    ocultarError("error-usuario");
                    ocultarError("error-contraseña");
                    ocultarError("error-profesion");
                    ocultarError("error-apellido");
                }
            }
        }
        else {
            if(usrApellido.length == 0){
                if(usrProfesion.length == 0){
                    // Email, apellido y profesión vacíos
                    mostrarError("error-email", "Falta la dirección de correo");
                    mostrarError("error-apellido", "Falta el apellido");
                    mostrarError("error-profesion", "Falta la profesión");                     
                    ocultarError("error-usuario");
                    ocultarError("error-contraseña");
                    ocultarError("error-nombre");
                }
                else {
                    // Email, apellido vacíos
                    mostrarError("error-email", "Falta la dirección de correo");
                    mostrarError("error-apellido", "Falta el apellido");                    
                    ocultarError("error-usuario");
                    ocultarError("error-contraseña");
                    ocultarError("error-profesion");
                    ocultarError("error-nombre");
                }
            }
            else {
                if(usrProfesion.length == 0){
                    // Email y profesión vacíos
                    mostrarError("error-email", "Falta la dirección de correo");
                    mostrarError("error-profesion", "Falta la profesión");
                    ocultarError("error-usuario");
                    ocultarError("error-contraseña");
                    ocultarError("error-apellido");
                    ocultarError("error-nombre");
                }
                else {
                    // Email vacío
                    mostrarError("error-email", "Falta la dirección de correo");
                    ocultarError("error-usuario");
                    ocultarError("error-contraseña");
                    ocultarError("error-profesion");
                    ocultarError("error-apellido");
                    ocultarError("error-nombre");
                }
            }
        }
    }
    else if(usrNombreReal.length == 0){
        if(usrApellido.length == 0){
            if(usrProfesion.length == 0){
                // Nombre, apellido y profesión vacíos
                mostrarError("error-nombre", "Falta el nombre");
                mostrarError("error-apellido", "Falta el apellido");
                mostrarError("error-profesion", "Falta la profesión");
                ocultarError("error-usuario");
                ocultarError("error-contraseña");
                ocultarError("error-email");
            }
            else {
                // Nombre y apellido vacíos
                mostrarError("error-nombre", "Falta el nombre");
                mostrarError("error-apellido", "Falta el apellido");
                ocultarError("error-usuario");
                ocultarError("error-contraseña");
                ocultarError("error-profesion");
                ocultarError("error-email");
            }
        }
        else {
            if(usrProfesion.length == 0){
                // Nombre y profesión vacíos
                mostrarError("error-nombre", "Falta el nombre");
                mostrarError("error-profesion", "Falta la profesión");
                ocultarError("error-usuario");
                ocultarError("error-contraseña");
                ocultarError("error-apellido");
                ocultarError("error-email");
            }
            else {
                // Nombre vacío
                mostrarError("error-nombre", "Falta el nombre");
                ocultarError("error-usuario");
                ocultarError("error-contraseña");
                ocultarError("error-profesion");
                ocultarError("error-apellido");
                ocultarError("error-email");
            }
        }
    }
    else if(usrApellido.length == 0){
        if(usrProfesion.length == 0){
            // Apellido y profesión vacíos
            mostrarError("error-apellido", "Falta el apellido");
            mostrarError("error-profesion", "Falta la profesión");
            ocultarError("error-usuario");
            ocultarError("error-contraseña");
            ocultarError("error-nombre");
            ocultarError("error-email");
        }
        else {
            // Apellido vacío
            mostrarError("error-apellido", "Falta el apellido");
            ocultarError("error-usuario");
            ocultarError("error-contraseña");
            ocultarError("error-profesion");
            ocultarError("error-nombre");
            ocultarError("error-email");
        }
    }
    else if(usrProfesion.length == 0){
        // Profesión vacía
        mostrarError("error-profesion", "Falta la profesión");
        ocultarError("error-usuario");
        ocultarError("error-contraseña");
        ocultarError("error-apellido");
        ocultarError("error-nombre");
        ocultarError("error-email");
    }
    else if(usrPass.length < 8){
        if(usrEmail.includes("@") == false){
            // Campos completos, contraseña y correo inválidos
            mostrarError("error-contraseña", "Contraseña inválida");
            mostrarError("error-email", "Dirección de correo inválida");
        }
        else {
            // Campos completos, contraseña inválida
            mostrarError("error-contraseña", "Contraseña inválida");
        }
    }
    else if(usrEmail.includes("@") == false){
        // Campos completos, correo inválido
        mostrarError("error-email", "Dirección de correo inválida");
    }
    else {
        // Campos completos (ocultamos todos los mensajes de error)
        ocultarError("error-usuario");
        ocultarError("error-contraseña");
        ocultarError("error-email");
        ocultarError("error-nombre");
        ocultarError("error-apellido");
        ocultarError("error-profesion");

        const usuario = {"usuario": usrNombre, "contraseña": usrPass, 
            "email": usrEmail, "nombre": usrNombreReal, "apellido": usrApellido,
            "profesion": usrProfesion
        };

        // Guardamos los datos del usuario en localStorage
        if(localStorage.getItem("cuenta-usuario") == null){
            localStorage.setItem("cuenta-usuario", JSON.stringify(usuario));
            console.log(localStorage.getItem("cuenta-usuario"));
        }
        else {
            let usuarios = [JSON.parse(localStorage.getItem("cuenta-usuario"))];
            usuarios.push(usuario);
            localStorage.setItem("cuenta-usuario", JSON.stringify(usuarios));
        }
        esValido = true;
    }

    return esValido;
}

/* Definimos un evento que se dispara cada vez que se presiona el botón de crear cuenta.
Cuando se dispara este evento, se realiza la validación del formulario */
let btnSignUp = document.getElementById("bot-signup");
btnSignUp.addEventListener("click", function(event) {
    event.preventDefault(); // Evitamos que el documento HTML maneje el evento por defecto
    if(validarSignup()){
        alert("Usuario registrado exitosamente");
        // Volvemos a la página de login
        window.location.href = "login.html";
    }
    else {
        alert("Error al crear cuenta");
    }
});

let btnCancelar = document.getElementById("but-cancelar");
btnCancelar.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "login.html";
});