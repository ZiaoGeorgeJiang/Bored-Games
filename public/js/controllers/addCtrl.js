angular.module('addCtrl',[]).controller('addController',function($scope,Game){
	$scope.newGame = {};

	$scope.addNewGame = function(){
		console.log($scope.newGame);
		Game.create($scope.newGame);
	}
});