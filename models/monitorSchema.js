const mongoose = require("mongoose")
const monitorSchema = mongoose.Schema({
    model: String,
    screen_size: Number,
    price: Number
    })
    module.exports = mongoose.model("monitor",monitorSchema)