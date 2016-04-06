app.controller('mainController', ['$scope', 'productsList', function($scope,productsList){
	$scope.test = "HELLLO";
	$scope.products = productsList;
}]);