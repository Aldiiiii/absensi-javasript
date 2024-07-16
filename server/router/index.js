const express = require('express')
const UserController = require('../controllers/admin/userController')
const router = express.Router()
const userRouter = require('./user')

router.get('/', (req, res, next) => {
    res.send("Hello, world!")
})

router.post('/register', UserController.register)
router.use('/users', userRouter)



module.exports = router