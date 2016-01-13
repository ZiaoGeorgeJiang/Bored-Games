var mongoose = require('mongoose');

module.exports = mongoose.model('Game',{
	name: {type: String, default: ''},
	description: {type: String, default:''},
	numPlayers: {
		min:{type: Number, default:100},
		max:{type: Number, default:99}
	},
	rating: {type: Number, default:0, min: 0, max: 5},
	estTime: {type:String, default: "15-30 min"},
	required: {type: [String], default: []}
});

//make estTime min/max and make continuous slider for it
//make a quantized? slider for rating