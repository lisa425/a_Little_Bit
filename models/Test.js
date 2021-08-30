const mongoose = require('mongoose')

const testSchema = mongoose.Schema({
    name:{
        type:String,
        maxlength: 50
    },
    location:{
        type:String,
        maxlength: 200
    },
    netflix:{
        type:Number
    },
    youtube:{
        type:Number
    },
    facebook:{
        type:Number
    },
    twitter:{
        type:Number
    },
    tiktok:{
        type:Number
    },
    instagram:{
        type:Number
    },
    kakaotalk:{
        type:Number
    },
    call:{
        type:Number
    },
    zoom:{
        type:Number
    },
    email:{
        type:Number
    },
    result:{
        type:Number
    },
    message:{
        type:String,
        maxlength:150
    }
},{timestamps:true})

testSchema.index({'count':1,'name':'text','createdAt':1});
const Test = mongoose.model('Test',testSchema);

module.exports = { Test }