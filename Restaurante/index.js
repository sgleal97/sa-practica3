const express = require('express');
const app = express();
const morgan = require('morgan');
const axios = require("axios");
var body_parser = require('body-parser').json();

//middlewares
app.use(morgan('dev'));

app.get('/', function(req, res) {
    res.json({"Title:":"Restaurante"});
});

//Recibir pedido
app.post('/recibirPedido', body_parser, function(req, res) {
    var order = req.body.id
    var descripcion = "Restaurante, se recibio el pedido: "+ order
    res.send("ok");
});

//Informacion de pedido, Cliente
app.get('/infoPedido/:order', body_parser, function(req, res) {
    var order = req.params.order
    var descripcion = "Restaurante, Informacion de pedido:"+order
    if(order>=0 & order <= 50){
        descripcion = "Orden:"+order +" en preparacion"
    }else if(order>=51 & order <= 100){
        descripcion = "Orden:"+order +" Enviada"
    }else{
        descripcion = "Orden:"+order +" Cancelada"
    }
    res.send(descripcion)
});

//Avisar al repartidor que ya esta el pedido
app.post('/avisarRepartidor', body_parser, function(req, res) {
    var order = req.body.id
    var descripcion = "Avisar al repartidor"
    
    axios.post('http://localhost:3003/Restaurante/recibirPedido',{'id':order})
    res.json({'id':order})
});


//starting the server
app.listen(3001, () => {
    console.log('Server on port ${3001}');
})