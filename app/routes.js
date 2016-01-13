var Game = require('./models/game');

module.exports = function(app){
	app.get('/api/games', function(req,res){
		Game.find(function(err,games){
			if (err) res.send(err);
			res.json(games);
		});
	});

	app.post('/api/games', function(req,res){
		var newGame = new Game();
		newGame.name = req.body.name;
		newGame.description = req.body.description;
		newGame.numPlayers = req.body.numPlayers;
		newGame.rating = req.body.rating;
		//newGame.estTime = req.body.estTime;
		newGame.required = req.body.required;
		newGame.save(function(err){
			if (err) res.send(err);
			else res.json({success:'success'});
		});
	});

	app.delete('/api/games/:id', function(req,res){
		Game.remove({_id: req.params.id}, function(err){
			if (err) res.send(err);
			else res.json({success:'success'})
		});
	});

	app.get('*', function(req, res){
		res.sendfile('./public/views/index.html');
	});
};