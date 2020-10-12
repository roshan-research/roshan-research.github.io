"use strict";

var express = require('express');
var app = express();
var open = require('open');
const port = process.env.PORT || 3000;

app.use('/src/', express.static('src'));
app.get('/', function (req, res) {
  res.sendFile( "index.html", { root: 'public' } );
});

app.listen(port, open('http://localhost:'+ port));
