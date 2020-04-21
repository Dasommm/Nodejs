const mongoose = require('mongoose')

//몽고와 연결
mongoose.connect('mongodb://127.0.0.1:27017/addrs',{useNewUrlParser:true})
    .catch(e => {console.error('connection error',e.message)})

const db = mongoose.connection

module.exports=db