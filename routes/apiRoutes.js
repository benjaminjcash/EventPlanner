const router = require('express').Router();
const eventController = require('../controller/eventController');

router.get('/events', eventController.findAll);

router.get('/events/:id', eventController.findById);

router.post('/events', eventController.create);

module.exports = router;