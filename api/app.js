const path = require('path');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const PORT = 8080;

var app = express();

const routes = require("./routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.json());

app.use('/', routes());

app.listen(PORT, function(){
    console.log("Live on port: " + PORT);
    console.log(" - URL: http://localhost:" + PORT);
})