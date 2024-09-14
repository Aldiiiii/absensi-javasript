const express = require('express');
const UserController = require('../controllers/admin/userController');
const router = express.Router();
const userRouter = require('./user');
const verifyToken = require('../middlewares/authMiddelware');

router.get('/', (req, res, next) => {
  res.send('Hello, world!');
});

router.post('/M4r1m4s/login', UserController.login);

router.post('/register', UserController.register);
router.use('/users', verifyToken, userRouter);

module.exports = router;
