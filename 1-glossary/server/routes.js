const router = require('express').Router();
const DButils = require('./db.js');



router.get('/', DButils.getAll);
router.get('/:term', DButils.getMatch);
router.post('/', DButils.save);
router.delete('/:id', DButils.deleteEntry);
router.put('/:id', DButils.update);

module.exports = router;