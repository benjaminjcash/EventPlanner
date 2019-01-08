const router = require('express').Router();
const eventController = require('../controller/eventController');

router.route('/events')
	.get(eventController.findAll)
	.post(eventController.create);

router.route('/events/:id')
	.get(eventController.findById)
	.delete(eventController.delete);

module.exports = router;