// Establecemos una nueva conexión websocket con Node-RED (el cual escucha en el puerto 1880)
let socket = new WebSocket("ws://localhost:1880/ws");

// Método que se ejecuta cuando se establece la conexión
socket.onopen = function() {
    console.log("Conectado al WebSocket de Node-RED");
    // Enviamos un mensaje hacia Node-RED
    socket.send("Hola, Node-RED!");
};

// Método para recibir mensajes de Node-RED
socket.onmessage = function(event) {
    const d = new Date(); // Creamos un objeto para obtener la fecha y hora actuales
    console.log("Datos recibidos: " +event.data);
    // Convertimos los datos recibidos en formato JSON en un objeto de JavaScript
    const data = JSON.parse(event.data);
    console.log(data);
    // Actualizamos la fecha y hora actual
    document.getElementById("ultima-act").innerHTML = d.getDate() + "/" +(d.getMonth()+1) + "/" +d.getFullYear() + " " +d.getHours() + ":" +d.getMinutes();
    // Actualizamos el valor de las diferentes variables accediendo a cada una de las propiedades del objeto parseado
    for(let i in data){
        switch(i){
            case "ema/temperatura":
                document.getElementById("temp").innerHTML = data[i] + "°C";
                break;
            case "ema/humedad":
                document.getElementById("hum").innerHTML = data[i] + "%";
                break;
            case "ema/presion":
                document.getElementById("pres").innerHTML = data[i] + " hPa";
                break;
            case "ema/viento/velocidad":
                document.getElementById("velv").innerHTML = data[i] + " km/h";
                break;
            case "ema/lluvia":
                document.getElementById("precip").innerHTML = data[i] + " mm";
                break;
        }
    }

};

// Método que se ejecuta al cerrar la conexión
socket.onclose = function() {
    console.log("Conexión cerrada");
};

// Método que se ejecuta cuando hay un error
socket.onerror = function(error) {
    console.error("Error en WebSocket: ", error);
};