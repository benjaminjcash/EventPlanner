const router = require('express').Router();
const eventsController = require('../controller/eventsController');

router.get('/events', eventsController.findAll);

router.get('/events/:id', eventsController.findById);

module.exports = router;