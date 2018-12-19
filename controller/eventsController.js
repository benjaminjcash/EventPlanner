const eventsController = {
	findAll: function(req, res) {
		console.log(req.params.id);
		let id = req.params.id;
		res.send('all events');
	},

	findById: function(req, res) {
		let id = req.params.id;
		res.send('event id: ' + id);
	}
}

module.exports = eventsController;