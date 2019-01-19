const express = require('express');
const tasks = require('../controller/tasks');
const router = express.Router();

router.post('/taskop/', tasks.taskOperation);
router.get('/tasks/', tasks.listTasks);

module.exports = router; 