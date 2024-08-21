const express = require('express');
const taskController = require('../controllers/task.controller');
const router = express.Router();

router.post('/', taskController.create);
router.get('/', taskController.findAll);
router.delete('/:id', taskController.delete);

module.exports = router;
