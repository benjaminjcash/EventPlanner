const Event = require('../models/Event');

const eventController = {
	findAll: function(req, res) {

		Event.find()
			.then((data) => {
				console.log(data);
				res.send(data);
			})
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