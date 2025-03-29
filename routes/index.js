//Rutas GET, POST
const express = require('express');
const router = express.Router();    //e permite definir rutas por separado de su aplicación principal.


//Importar el controlador desde el archivo homeController.js
const homeController = require('../controllers/homeController');





module.exports = function (){
 //Ruta home
 router.get('/', homeController.Home);

 router.get('/Productos', homeController.Productos);

    return router;

} 


