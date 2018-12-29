const Event = require('../models/Event');

const eventController = {
	findAll: function(req, res) {
		console.log(req.params.id);
		let id = req.params.id;
		res.send(['one', 'two', 'three']);
	},

	findById: function(req, res) {
		let id = req.params.id;
		res.send('event id: ' + id);
	},

	create: function(req, res) {
	console.log(req.body);
		Event.create(req.body, function(err, event) {
			if(err) {
				console.log("Error: " + err);
			}
			res.send(event);
		})
	}
}

module.exports = eventController;