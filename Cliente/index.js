const express = require('express');
const app = express();
const morgan = require('morgan');
const axios = require("axios");
const { response } = require('express');
var body_parser = require('body-parser').json();

middlewares
app.use(morgan('dev'));

app.get('/', function(req, res) {
    res.json({"Title:":"Cliente"});
});

//No. orden
app.get('/orden', function(req, res){
    var orden = Math.floor(Math.random() * 100)
    var descripcion = "Cliente, Nueva orden: "+ orden
    axios.post('http://localhost:3001/recibirPedido',{'id':orden})
    res.json({'id':orden})
})

//Estado del pedido, Restaurante
app.get('/estadoRestaurante', body_parser, function(req, res) {
    var order = req.body.id
    var descripcion = "Cliente, Estado del pedido:"+order
    axios.get('http://localhost:3001/infoPedido/'+ order)
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
    var order = req.body.id
    var descripcion = "Cliente, Estado del pedido"
    axios.get('http://localhost:3002/informarPedido/'+order)
    .then(function(response){
        res.send(response['data'])
    });
});

//starting the server
app.listen(3000, () => {
    console.log('Server on port ${3000}');
})