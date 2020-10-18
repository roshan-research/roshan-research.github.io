"use strict";

var express = require('express');
var app = express();
var open = require('open');
const port = process.env.PORT || 3000;

app.use('/dist', express.static('public/dist'));
app.use('/src/images', express.static('src/images'));
app.use('/dist/images', express.static('src/images'));
app.use('/dist/Fonts', express.static('src/Fonts'));
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, open('http://localhost:'+ port));
