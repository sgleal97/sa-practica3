'use strict';
const express = require('express');
const app = express();
const morgan = require('morgan');
const axios = require("axios");
var body_parser = require('body-parser').json();

// middlewares
app.use(morgan('dev'));

//Recibir pedido
app.post('/recibirPedido', body_parser, function(req, res) {
    var order = req.body.id
    var descripcion = "Se recibio el pedido: "+ order
    res.send("ok");
});

//Informacion de pedido, Cliente
app.get('/infoPedido/:order', body_parser, function(req, res) {
    var order = req.params.order
    var descripcion = "Se recibio orden:"+order +" para saber su estado"
    //axios.post('http://localhost:3003/log',{'descripcion':descripcion})
    var state = Math.floor(Math.random() * (3-1)+1)
    if(state==3){
        descripcion = "Orden:"+order+"  enviada"
    }else if(state == 2){
        descripcion = "Orden:"+order+" cancelada"
    }else{
        descripcion = "Orden:"+order+" en preparacion"
    }
    //axios.post('http://localhost:3003/log',{'descripcion':descripcion})
    res.send(descripcion)
});

//Avisar al repartidor que ya esta el pedido
app.get('/avisarRepartidor', function(req, res) {
    res.json({"Title:":"avisarRepartidor"});
});


//starting the server
app.listen(3001, () => {
    console.log('Server on port ${3001}');
})