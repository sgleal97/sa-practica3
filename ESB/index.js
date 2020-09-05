const express = require('express');
const app = express();
const axios = require("axios")
var body_parser = require('body-parser').json();

app.get('/', function(req, res) {
    res.json({"Title:":"ESB"});
});

app.get('/Cliente/recibirPedido', function(req, res){
    var order = req.body.id
    axios.post('http://localhost:3001/recibirPedido',{'id':orden})
    res.send("ok");
})

app.get('/Cliente/infoPedido/:order',body_parser, function(req,res){
    var order = req.params.order
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

app.get('/Cliente/informarPedido/:order',body_parser, function(req,res){
    var order = req.params.order
    axios.get('http://localhost:3002/informarPedido/'+order)
    .then(function(response){
        res.send(response['data'])
    });
});

app.post('/Restaurante/recibirPedido',body_parser,function(req,res){
    var order = req.body.id
    axios.post('http://localhost:3002/recibirPedido',{'id':order})
    res.send("OK")
});

app.listen(3003, () => {
    console.log('Server on port ${3003}');
})