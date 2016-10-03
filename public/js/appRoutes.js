angular.module('appRoutes',[]).config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider){
	$routeProvider.when('/',{
		templateUrl: 'views/home.html',
		controller: "mainController"
	});

	$routeProvider.when('/games', {
		templateUrl: 'views/games.html',
		controller: "gameController"
	});

	$routeProvider.when('/add', {
		templateUrl: 'views/add.html',
		controller: "addController"
	});

	$locationProvider.html5Mode(true);
}]);