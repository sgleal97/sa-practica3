'use strict';
const express = require('express');
const app = express();
const morgan = require('morgan');
const axios = require("axios");
var body_parser = require('body-parser').json();

// middlewares
app.use(morgan('dev'));

app.get('/', function(req, res) {
    res.json({"Title:":"Cliente"});
});

//No. orden
app.get('/orden', function(req, res){
    var orden = Math.floor(Math.random() * 100)
    var descripcion = "Nueva orden: "+ orden
    axios.post('http://localhost:3001/recibirPedido',{'id':orden})
    res.json({'id':orden})
})

//Estado del pedido, Restaurante
app.get('/estadoRestaurante', body_parser, function(req, res) {
    var order = req.body.id
    var descripcion = "Se desea saber el estado de orden:"+order
    //axios.post('http://localhost:3003/log',{'descripcion':descripcion})
    axios.get('http://localhost:3001/infoPedido/'+order)
        .then(function(response){
            res.send(response['data'])
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
        });
});

//Estado del pedido, Repartidor
app.get('/estadoRepartidor', function(req, res) {
    res.json({"Title:":"estadoRepartidor"});
});

//starting the server
app.listen(3000, () => {
    console.log('Server on port ${3000}');
})