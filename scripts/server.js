"use strict";

var express = require('express');
var app = express();
var open = require('open');
const port = process.env.PORT || 3000;

app.use('/dist', express.static('dist'));
app.use('/src', express.static('src'));
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: '.' });
});

app.listen(port, open('http://localhost:'+ port));
