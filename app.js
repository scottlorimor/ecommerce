// necessary imports 

var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongo = require('mongojs');

// initialize app, server & DB
var app = express();
var port = 2020;
var db = mongo('ecommTest', ['test']);

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors);



app.listen(port, function() {
	console.log("listening on port: ", port);
	// console.log(app);
});



