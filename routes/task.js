const express = require('express')
const router = express.Router()
const {createTask,deleteTask,getSingleTaskByID,updateTask,getTask} = require('../controllers/task')

router.get('/', getTask)
router.post('/', createTask)
router.get('/:id', getSingleTaskByID)
router.patch('/:id', updateTask)
router.delete('/:id', deleteTask)

module.exports = router