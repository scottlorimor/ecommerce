var app = angular.module('ecommerce', ['ui.router'])

app.config(function($urlRouterProvider, $stateProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider.state('products', {
		url:'/products',
		templateUrl: '',
		controller: 'productsController',
		resolve: {
			productsList: function(productsService) {
				return productsService.getProducts();
			}
		}
	});
});

