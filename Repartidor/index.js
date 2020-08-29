const express = require('express');
const app = express();
const axios = require("axios");
var body_parser = require('body-parser').json();

app.get('/', function(req, res) {
    res.json({"Title:":"Repartidor"});
});

//starting the server
app.listen(3002, () => {
    console.log('Server on port ${3002}');
})