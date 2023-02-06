const express = require('express')
const userController = require('../controllers/user.controller');
const userRouter = express.Router()

userRouter.get('/:address', userController.getUser)
userRouter.post('/', userController.registerUser)
module.exports = userRouter
