require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const { connectToServer } = require('./db/connection')
const PORT = process.env.PORT || '8080';
const router = require('./routes')

app.use(express.json())
app.use(cors())
app.use('/api', router)

app.listen(PORT, async () => {
    connectToServer(function (error) {
        if (error) console.error(error)
    })
    console.log(`App listening at http://localhost:${PORT}`)
})