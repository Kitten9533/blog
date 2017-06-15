var express = require('express');
var toolsController = require('./controllers/toolsController');
var usersController = require('./controllers/usersController');
var router = express.Router(); 

router.get('/send_trail_mail', toolsController.sendTrailMail);
router.post('/sendToRebot', toolsController.sendToRebot);
router.post('/register', usersController.registerUser);
router.post('/login', usersController.login);

module.exports = router;