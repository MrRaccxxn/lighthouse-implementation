const express = require('express')
const paperController = require('../controllers/paper.controller');
const paperRouter = express.Router()
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 10000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png|pdf)$/)) {
            return cb(new Error('Please upload a valid image file'))
        }
        cb(undefined, true)
    }
})


paperRouter.post('/', upload.array('files'), paperController.registerPaper)
paperRouter.get('/',  paperController.getPapers)

module.exports = paperRouter
