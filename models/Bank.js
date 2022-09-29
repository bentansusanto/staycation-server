const mongoose = require('mongoose')

const bankSchema = new mongoose.Schema({
    nameBank : {
        type : String,
        required : true
    },
    numberBank : {
        type : Number,
        required : true
    },
    name :{
        type : String,
        required : true
    }
})

module.exports = mongoose.model('Bank', bankSchema);