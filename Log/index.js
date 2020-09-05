const express = require('express');
const app = express();
const morgan = require('morgan');
const axios = require("axios");
const fs = require('fs')
var body_parser = require('body-parser').json();

middlewares
app.use(morgan('dev'));

app.get('/', function(req, res) {
    res.json({"Title:":"Log"});
});

//Registros
app.post('/log', body_parser, function(req,res){
    var descripcion = req.body.descripcion;
    var fecha = new Date();
    var dato = descripcion + " - " + fecha + "\n";
    var file = fs.createWriteStream('file.log',{
        flags: 'a'
    })
    file.write(dato);
    file.end();
    res.send("ok")
});

app.listen(3003, () => {
    console.log('Server on port ${3003}');
});