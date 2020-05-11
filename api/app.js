const path = require('path');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');

const PORT = 8080;

var app = express();

const routes = require("./routes");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './public')));
app.use(favicon(path.join(__dirname, "./public/img/favicon.ico")));
app.use(bodyParser.json());

app.use('/', routes());

app.listen(PORT, function(){
    console.log("Live on port: " + PORT);
    console.log(" - URL: http://localhost:" + PORT);
})