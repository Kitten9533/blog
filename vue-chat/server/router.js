var express = require('express');
var toolsController = require('./controllers/toolsController');
var router = express.Router();

router.get('/send_trail_mail', toolsController.sendTrailMail);
router.get('/sendToRebot', toolsController.sendToRebot);

module.exports = router;