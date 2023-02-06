require('dotenv').config()
const User = require('../db/models/user')

const registerUser = async (req, res) => {
    try {
        const { address, name, profession, email } = req.body

        const newUser = new User({
            address,
            name,
            profession,
            email,
        });

        await newUser.save().then(async (response) => {
            res.status(200).send(response)
        })
    } catch (error) {
        console.error(error)
        const msg =
            error.message ||
            (error.stack && error.stack.split('\n')[0]) ||
            'Unknown error'
        res.status(403).send({ error: msg })
    }
}

const getUser = async (req, res) => {
    try {
        const { address } = req.params;
        const data = await User.find({ address });

        res.status(200).send(data);
    } catch (error) {
        console.error(error)
        const msg =
            error.message ||
            (error.stack && error.stack.split('\n')[0]) ||
            'Unknown error'
        res.status(403).send({ error: msg })
    }
}

module.exports = {
    registerUser,
    getUser
}