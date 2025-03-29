//Modelo vista controlador (MVC)
//Controlador: es el cerebro de la apicacion que controla como se muestran los datos
//Vista: es el frontend o interfaz grafica de usuario
//Modelo: es el back end que contiene toda la logica 

//En este lugar iran todos los controladores del home
const path = require('path');

exports.Home = (req, res)=>{
   // res.send('Home');  
    //res.render('Home');  
    res.sendFile(path.join(__dirname, '../index.html'));



 }

 exports.Productos = (req, res)=>{
    res.render('Productos');

 }


 /*Templates Engine conocidos

 PLUG    utilizaresmos este, entonces para instalarlo ejecutar en consola =>  npm install --save pug
 HANDLEBARS
 BeforeUnloadEvent */



