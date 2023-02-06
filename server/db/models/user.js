const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    address: {
        type: String,
        require: true,
    },
    name: {
        type: String,
    },
    profession: {
        type: String,
    },
    email: {
        type: String,
    },
    papers: {
        type: Array,
        "default": [],
    }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema)