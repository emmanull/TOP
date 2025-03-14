//Rutas GET, POST
const express = require('express');
const router = express.Router();   //e permite definir rutas por separado de su aplicación principal.


//Importar el controlador desde el archivo homeController.js
const homeController = require('../controllers/homeController')


module.exports = function (){
 //Ruta home
 router.get('/', homeController.Home);

 router.get('/Productos', homeController.Productos);

    return router;

} 



//Modelo vista controlador (MVC)
//Controlador: es el cerebro de la apicacion que controla como se muestran los datos
//Vista: es el frontend o interfaz grafica de usuario
//Modelo: es el back end que contiene toda la logica 
