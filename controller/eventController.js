const Event = require('../models/Event');

const eventController = {
	findAll: function(req, res) {
		Event.find()
			.then((data) => {
				res.send(data);
			})
	},

	findById: function(req, res) {
		let id = req.params.id;
		res.json({ eventid: id });
	},

	create: function(req, res) {
		Event.create(req.body, function(err, event) {
			if(err) {
				console.log("Error: " + err);
			}
			res.send(event);
		})
	},

	delete: function(req, res) {
		let id = req.params.id;
		Event.deleteOne( {_id: id }, function(err, event) {
			if(err) {
				console.log("Error: " + err);
			}
			res.send(event);
		})
	},

	edit: function(req, res) {
		let id = req.params.id;
		let data = req.data;
		Event.findByIdAndUpdate(id,  { $set: data }, { new: true }, function(err, event) {
			if(err) {
				res.send(err);
			}
			res.send(event);
		});
	}
}

module.exports = eventController; 