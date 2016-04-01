// necessary imports 

var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

// initialize app & port
var app = express();
var port = 2020;


app.listen(port, function() {
	console.log("listening on port: ", port);
	console.log(app);
});

