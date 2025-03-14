const express = require("express");
const app=express();
const routes = require('./routes')

const path = require('path');

const port = process.env.PORT || 3000;


// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));


/* Configura una ruta básica o mandar a traer un archivo html
app.get('/', (req, res) => {
  /*res.send('¡Hola, o!');
  res.sendFile(path.join(__dirname, '/index.html'));
});

*/
app.use('/',routes());

 
// Levanta el servidor y escucha en el puerto especificado*
app.listen(port, () => {
 console.log(`Ser corriendo en http://localhost:${port}`);
});