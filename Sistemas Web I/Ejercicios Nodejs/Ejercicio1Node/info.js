const os = require('os');
const config = require('./config.json');
const time = config.time;

function informacion_inicial(){
    console.log("Version de Node.js: " + process.version);
    console.log("RAM libre: " + os.freemem());
    console.log("Memoria total: " + os.totalmem());
    console.log("CPU: " + os.cpus());
}


function informacion_sistema(){
    setInterval(() => {
        console.log("Uso del CPU: " + os.loadavg());
        console.log("Uso de memoria: " + (os.totalmem() - os.freemem()));
        console.log("Tiempo activo del sistema: " + os.uptime());
        console.log("Tiempo que lleva Node activo: " + process.uptime());
    }, time);
}

module.exports = { informacion_inicial, informacion_sistema };