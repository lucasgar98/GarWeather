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
    const d = new Date();
    console.log("Datos recibidos: " +event.data);
    // Actualizamos el valor de la temperatura
    document.getElementById("temp").innerHTML = event.data + "°C";
};

// Método que se ejecuta al cerrar la conexión
socket.onclose = function() {
    console.log("Conexión cerrada");
};

// Método que se ejecuta cuando hay un error
socket.onerror = function(error) {
    console.error("Error en WebSocket: ", error);
};