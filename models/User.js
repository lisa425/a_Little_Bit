const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
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
    tictok:{
        type:Number
    },
    instagram:{
        type:Number
    },
    email:{
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
    result:{
        type:Number
    },
    date:{
        type:String 
    },
    message:{
        type:String,
        maxlength:150
    }
})

const User = mongoose.model('User',userSchema)

module.exports = { User }