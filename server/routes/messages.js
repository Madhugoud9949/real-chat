const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

router.post('/addMessage', messageController.addMessage);
router.post('/getMessages', messageController.getMessages);

module.exports = router;
