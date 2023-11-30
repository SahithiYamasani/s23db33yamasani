const mongoose = require("mongoose")
const monitorSchema = mongoose.Schema({
    model: String,
    screen_size:{type :Number, min :[10,'Mininum size should be 10'],max :[30, 'maximum size should be 30'] } ,
    price: {type :Number, min :[10,'Mininum size should be 10'],max :[30, 'maximum size should be 30'] }
    })
    module.exports = mongoose.model("monitor",monitorSchema)