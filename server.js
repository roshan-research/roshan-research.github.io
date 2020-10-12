"use strict";

var express = require('express');
var app = express();
var open = require('open');
const port = process.env.PORT || 3000;

app.use(express.static('src'));
app.get('/', function (req, res) {
  res.sendFile( "src/index.htm" );
});

app.listen(port, open('http://localhost:'+ port));