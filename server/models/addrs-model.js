const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Addrs = new Schema(
    {
        name : {type:String},
        email  :{type:String},
        phone  :{type:String}
    })

module.exports = mongoose.model('addrs',Addrs)