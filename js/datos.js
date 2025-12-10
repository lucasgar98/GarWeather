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

/* created_at
: 
"2025-12-05T13:04:37Z" */
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

/* Hacemos la consulta a la API ThingSpeak para obtener los últimos 10 datos y los
mostramos en la tabla */
let regTabla = document.getElementById("reg-tabla");
regTabla.innerHTML = "";
fetch("https://api.thingspeak.com/channels/2317526/feeds.json?api_key=VL73GBXA69XAZRSG&results=10")
    .then(r => r.json())
    .then(data => {
        let filas = [];
        // Recorremos todos los elementos del array y los parseamos
        data.feeds.forEach(element => {
            console.log(element);
            // Creamos una fila y la llenamos con los datos obtenidos
            let fila = document.createElement("tr");
            fila.innerHTML = `
                <td>${parseDateTime(element.created_at)}</td>
                <td>${parseFloat(element.field1).toFixed(1)}°C</td>
                <td>${parseFloat(element.field2).toFixed(1)}%</td>
                <td>${parseFloat(element.field4).toFixed(1)} hPa</td>
                <td>${parseFloat(element.field5).toFixed(1)} km/h</td>
                <td>${obtenerDirViento(element.field7)}</td>
                <td>${parseFloat(element.field8).toFixed(1)} mm</td>   
            `;
            filas.push(fila);
        });
        /* Recorremos el array de filas en sentido inverso para mostrar los datos
        en la tabla, ya que los datos leídos de ThingSpeak están ordenados de más antiguo
        a más reciente */
        for(let i=(filas.length-1); i>=0; i--){
            regTabla.appendChild(filas[i]);
        }
        /* Guardamos los valores más recientes en sessionStorage, para poder
        mostrarlos en la página de inicio */
        sessionStorage.setItem("date-time", parseDateTime(data.feeds[9].created_at));
        sessionStorage.setItem("temp", parseFloat(data.feeds[9].field1).toFixed(1));
        sessionStorage.setItem("hum", parseFloat(data.feeds[9].field2).toFixed(1));
        sessionStorage.setItem("pres", parseFloat(data.feeds[9].field4).toFixed(1));
        sessionStorage.setItem("velv", parseFloat(data.feeds[9].field5).toFixed(1));
        sessionStorage.setItem("dirv", obtenerDirViento(data.feeds[9].field7));
        sessionStorage.setItem("precip", parseFloat(data.feeds[9].field8).toFixed(1));
    });

if(sessionStorage.getItem("sesionIniciada") == "true"){
    // Mostramos el ícono de usuario
    document.getElementById("usr-container").style.display = "block";

    const usrName = document.getElementById("user-name");
    usrName.textContent = "lucasgar98";
    usrName.style = "font-weight: 800; font-size: 22px; font-family: 'Public Sans';";
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