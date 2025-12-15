const fs = require('fs');

fs.access('package.json', (err) => {
    if (err) {
        console.error('El archivo package.json no existe.');
        return;
    }
    fs.readFile('package.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo package.json:', err);
            return;
        }
    });
});

datos = data.diccionario;
function generatePassword(numPalabras){
    const n = data.diccionario || 3;
}