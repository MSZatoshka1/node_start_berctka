const express = require('express');
var path = require('path');
const app = express();
app.use(express.static(path.join(__dirname + '/public')));
app.set('view engine', 'html');
module.exports = app;

