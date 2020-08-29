const express = require('express');
const app = express();
const axios = require("axios")
var body_parser = require('body-parser').json();

app.get('/', function(req, res) {
    res.json({"Title:":"ESB"});
});

app.listen(3003, () => {
    console.log('Server on port ${3003}');
})