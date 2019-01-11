const router = require('express').Router();
const eventController = require('../controller/eventController');

router.route('/events')
	// find all events
	.get(eventController.findAll)
	// create event
	.post(eventController.create);

router.route('/events/:id')
	// get specific event
	.get(eventController.findById)
	// delete specific event
	.delete(eventController.delete)
	// edit specific event
	// .put(eventController.edit);

module.exports = router;