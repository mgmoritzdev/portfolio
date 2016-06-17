var app = angular.module("App", []);

app.controller("MainCtrl", ["$scope", function($scope) {
	$scope.hello = 'Hello World';
}]);