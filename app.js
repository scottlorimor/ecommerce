// necessary imports 

var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongo = require('mongojs');

// initialize app, server & DB
var app = express();
var port = 2020;
var db = mongo('ecommerce', ['products']); // (dbName, ['collections to work with'])

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());



app.listen(port, function() {
	console.log("listening on port: ", port);
	// console.log(app);
});

app.get('/api/products', function(req,res) {
	console.log("Remote address", req.connection.remoteAddress, 
		"connected to the server with GET @: /api/products on", Date());
	// res.json('endpoint @: /api/products connected.');
	
	var query = req.query;
	db.products.find(query,function(err, resp) {
		if (err) res.status(500).json(err);

		res.json(resp);
});

app.get('/api/products/:id', function(req,res) {
	console.log("Remote address", req.connection.remoteAddress, 
		"connected to the server with GET @: /api/products/:id on", Date());
	var temp = "You have selected a "+req.params.id;

	});

});

app.post('/api/products', function(req, res) {
	console.log("Remote address", req.connection.remoteAddress, 
		"connected to the server with POST @: /api/products/ on", Date());
	var temp = "You have added a "+req.body.type;

	db.products.save(req.body, function(err,resp) {
		if (err) res.status(500).json(err);

		res.json(temp);
	})

})


app.put('/api/products/:id', function(req,res) {
	console.log("Remote address", req.connection.remoteAddress, 
		"connected to the server with PUT @: /api/products/:id on", Date());
	var temp = "You have edited a "+req.params.id;
	res.json(temp);

});

app.delete('/api/products/:id', function(req,res) {
	console.log("Remote address", req.connection.remoteAddress, 
		"connected to the server with Delete @: /api/products/:id on", Date());
	var temp = "You have DELETED a "+req.params.id;
	res.json(temp);	
});


