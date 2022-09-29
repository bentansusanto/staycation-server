const mongoose = require('mongoose')

const fiturSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    qty : {
        type : Number,
        required : true
    },
    imageUrl :{
        type : String,
        required : true
    }
})

module.exports = mongoose.model('Fitur', fiturSchema);