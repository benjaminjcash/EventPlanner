const router = require('express').Router();

router.get('/events', function(req, res) {
	res.send('blah');
})

module.exports = router;