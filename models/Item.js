const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema;

const itemSchema = new mongoose.Schema({
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
    categoryId : {
        type : ObjectId,
        ref : 'Category'
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

module.exports = mongoose.model('Item', itemSchema);