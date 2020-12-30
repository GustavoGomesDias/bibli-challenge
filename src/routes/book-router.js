const express = require('express');
const router = express.Router();
const controller = require('../controllers/book-controller');

router.get('/', controller.get);
router.get('/:id', controller.getById);
router.post('/', controller.post);
router.put('/update/:id', controller.update);
router.delete('/remove/:id', controller.delete);

module.exports = router;