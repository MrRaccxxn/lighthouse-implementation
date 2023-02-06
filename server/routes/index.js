
const express = require('express')
const userRouter = require('./user.route')
const paperRouter = require('./paper.route')

const router = express.Router()

router.use('/user', userRouter)
router.use('/paper', paperRouter)

module.exports = router
