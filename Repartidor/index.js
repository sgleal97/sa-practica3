const express = require('express');
const app = express();
const morgan = require('morgan');
const axios = require("axios");
var body_parser = require('body-parser').json();

//middlewares
app.use(morgan('dev'));

app.get('/', function(req, res) {
    res.json({"Title:":"Repartidor"});
});

//Recibir pedido del restaurante
app.post('/recibirPedido', body_parser, function(req, res) {
    var order = req.body.id
    var descripcion = "Se recibio el pedido: "+ order
    //log
    res.send("ok");
});

//informar estado de pedido al cliente
app.get('/informarPedido/:order',body_parser, function(req, res){
    var order = req.params.order
    var descripcion = "Repartidor, Estado del pedido"
    if(order<100){
        descripcion = "Orden:"+order+" en camino"
    }else{
        descripcion = "Orden:"+order+" entregada"
    }
    res.send(descripcion)
});

//Marcar como entregada
app.post('/ordenEntregada',body_parser,function(req,res){
    var order = req.body.id
    var descripcion = "orden entragada "+order
    res.send("OK")
});

//Starting server
app.listen(3002, () => {
    console.log('Server on port ${3002}');
})