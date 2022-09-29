const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true, 'Tolong title diinput']
    },
    price : {
        type : String,
        required : true
    },
    country : {
        type : String,
        default : 'Indonesia'
    },
    city : {
        type : String,
        required : true
    },
    isPopular : {
        type : Boolean,
    },
    desc : {
        type : String,
        required : true
    },
    imageId : [{
        type : ObjectId,
        ref : 'Image'
    }],
    fiturId :[ {
        type : ObjectId,
        ref : 'Fitur'
    }],
    activityId :[ {
        type : ObjectId,
        ref : 'Activity'
    }],
})

module.exports = mongoose.model('Item', categorySchema);