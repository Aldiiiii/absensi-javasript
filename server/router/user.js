const express = require('express')
const UserController = require('../controllers/admin/userController')
const router = express.Router()

router.get('/', UserController.users)
router.put('/:id', UserController.editUser)
router.patch('/:id', UserController.changePassword)
router.delete('/:id', UserController.deleteUser)


module.exports = router