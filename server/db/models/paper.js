const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PaperSchema = new Schema({
    title: {
        type: String,
        require: true,
    },
    author: {
        type: String,
    },
    description: {
        type: String,
    },
    ownerAddress: {
        type: String,
    },
    pdfUrl: {
        type: String,
    },
    thumbnailUrl: {
        type: String,
    }
}, { timestamps: true });

module.exports = mongoose.model('Paper', PaperSchema)