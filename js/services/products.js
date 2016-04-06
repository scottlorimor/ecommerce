app.service('productsService', ['$http', function($http){
	
	this.getProducts = function() {
		return $http.get('/api/products')
		.then(function(response) {
			console.log("The response: "+response.data);
			products = response.data;
		}).catch(function(err) {
			console.error(err);
		});
	}
}])