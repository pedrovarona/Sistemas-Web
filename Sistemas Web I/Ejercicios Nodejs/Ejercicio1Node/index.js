const http = require('http');
const { informacion_inicial, informacion_sistema } = require('./info.js');
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('Prueba\n');
    });

server.listen(port, () => {
    console.log(`Server running at port ${port}`);
    informacion_inicial();
    informacion_sistema();
});

