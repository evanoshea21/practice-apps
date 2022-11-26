const router = require('express').Router();
const models = require('./models.js');


router.post('/', models.post);


module.exports = router;