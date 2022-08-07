const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    message: {
        type: String
    }
}, 
{ timestamps: true })

module.exports = mongoose.model("post", messageSchema)