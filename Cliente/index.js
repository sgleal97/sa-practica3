const express = require('express');
const app = express();
const morgan = require('morgan');
//const axios = require("axios")
//var body_parser = require('body-parser').json();
//puerto y ruta
const PORT = 3000;
const HOST = 'localhost';

/*app.get('/', function(req, res) {
    res.send("Servidor Cliente")
});*/

// middlewares
app.use(morgan('dev'));
app.set('json spaces', 2);

app.get('/', function(req, res) {
    res.json({"Title:":"Cliente"});
});

//No. orden
app.get('/orden', function(req, res){
    var orden = Math.floor(Math.random() * 100)
    var descripcion = "Numero de orden: "+orden
    var data = {
        "id": orden,
        "descripcion": descripcion
    };
    res.json(data);
});

//starting the server
app.listen(3000, () => {
    console.log('Server on port ${3000}');
})