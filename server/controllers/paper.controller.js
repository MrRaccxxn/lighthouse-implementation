require('dotenv').config()
const lighthouse = require('@lighthouse-web3/sdk');
const User = require('../db/models/user')
const Paper = require('../db/models/paper')

const registerPaper = async (req, res) => {
    try {
        const { title, author, description, ownerAddress } = req.body
        const paper = req.files[0]
        const thumbnail = req.files[1]

        const paperResponse = await lighthouse.upload(paper.path, process.env.API_KEY);
        const thumbnailResponse = await lighthouse.upload(thumbnail.path, process.env.API_KEY);

        const newPaper = new Paper({
            title,
            author,
            description,
            ownerAddress,
            pdfUrl: `${process.env.LIGHTHOUSE_BASE_URL}/${paperResponse.data.Hash}`,
            thumbnailUrl: `${process.env.LIGHTHOUSE_BASE_URL}/${thumbnailResponse.data.Hash}`,
        });

        await newPaper.save().then(async (response) => {
            await User.findOneAndUpdate({ address: ownerAddress },
                { $push: { papers: { paperId: newPaper._id.toString() } } },
                { returnOriginal: false }
            )

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

const getPapers = async (req, res) => {
    try {
        const { filter, limit, useRegex } = req.query || {}
        let filterToUse = {};
        for (const key in filter) {
            if (filter[key] !== undefined && filter[key] !== '')
                filterToUse[key] = { $regex: new RegExp(filter[key], "i") }
        }

        const data = await Paper.find(useRegex === 'false' ? filter : filterToUse).sort({ createdAt: -1 }).limit(limit ? limit : null)
        res.status(200).send(data)
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
    registerPaper,
    getPapers
}