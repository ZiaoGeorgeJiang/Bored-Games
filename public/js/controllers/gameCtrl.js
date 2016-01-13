angular.module('gameCtrl',[]).controller('gameController',function($scope,Game){
	$scope.test = "game controller text";
	Game.get().then(function(games){
		$scope.games = games.data;
	});

	$scope.comparator = function(game, search){
		console.log(game + "   " + (typeof game.max));
		console.log(search + "   " + (typeof search));
		console.log(search == null || search == "");
		if (search == null || search == "") return true;
		else if (game.max){
			return (parseInt(search,10) <= game.max && parseInt(search,10) >= game.min);
		}
		else if (typeof game == "number") return (parseInt(search,10) <= game);
		else return game.search(new RegExp(search, "i")) > -1;
	};
});