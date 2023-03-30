var express= require('express');
var path = require('path')
var app = express();
const pug =require('pug')
const IniciarBD =require('./Config/conectar');
const Consolas = require('./public/model/consolas');
const registro = require('./public/model/registro');

const modelConsolas = require('./public/model/consolas')
const modelregistro = require('./public/model/registro')
const BodyParser = require('body-parser');
const bodyParser = require('body-parser');
var publicPath=path.resolve(__dirname+ '/public')
var publicPath=path.resolve(__dirname+ '/public')

app.use(express.static(publicPath));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', function(peticion, respuesta){
    respuesta.render("index.pug",{
        titulo: "Consolas",
        textoParrafo: "Bienvenido"
    });
})

app.get('/tienda', function(peticion, respuesta){
    modelConsolas.find(function(err,Consolas){
        respuesta.render("tienda.pug",{
            Consolas:Consolas
        })

    });
})

app.get('/agregarconsolas.html', function(peticion, respuesta,next){
   modelConsolas.find(function(err,Consolas){
        respuesta.render("Agregarconsolas.pug",{
            consolas:Consolas
    
        })

    });
})

app.get('/agregarconsola', function(peticion, respuesta,next){
   var newconsola = new modelConsolas({
        Nombre:peticion.query.txtNombre,
        Precio:peticion.query.txtPrecio,
        descripcion:peticion.query.txtdescripcion,
        Imagen:peticion.query.txtImagen,
        Contacto:peticion.query.txtContacto,
        
   });
   console.log(newconsola);
   newconsola.save();
   respuesta.redirect("Tienda")
});

app.get('/registro.html', function(peticion, respuesta,next){
    modelregistro.find(function(err,registro){
         respuesta.render("registro.html",{
             registro:registro
     
         })
 
     });
 })
    
app.get('/registro1', function(peticion, respuesta,next){
var newregistro = new modelregistro({
        NombreU:peticion.query.TXNombre,
        Apellidos:peticion.query.TXApellido,
        Cedula:peticion.query.TXID,
        Correo:peticion.query.TXemail,
        Contraseña:peticion.query.TXcontra,
        
});
    console.log(newregistro);
    newregistro.save();
    respuesta.redirect("index.html")
});  

app.use( function(peticion, respuesta){
    respuesta.status(400);
    let URLerror= peticion.originalUrl
    respuesta.render("404.pug" , {textoError:URLerror});

})

app.listen(5000, function(){
    console.log('escuchando en el puerto 5000');
    IniciarBD()
})