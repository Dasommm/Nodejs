const Addr = require("../models/addrs-model")

addrList = async(req,res) =>{
    await Addr.find({}, (err, addrs) => {
        if(err){
            return res.status(400).json({
                success : false,
                error : err
            })
        }
        if(!addrs.length){
            return res.status(404).json({
                success:false,
                error : 'find 에러'
            })
        }
        return res.status(200).json({
            success  : true,
            data : addrs
        })
    }).catch(err=> console.log(err))
}

addrOne = async(req, res) =>{
    await Addr.findOne({_id : req.params.id},(err, addr)=>{
        if(err){
            return res.status(400).json({
                success : false,
                error : err
            })
        }
        if(!addr){
            return res.status(404).json({
                success : false,
                error : 'find 에러'
            })
        }
        return res.status(200).json({
            success : true,
            data : addr
        })
    }).catch(err => console.log(err))
}


addrInsert = (req, res) =>{
    const body = req.body
    if(!body){
        return res.status(400).json({
            success : false,
            error : '데이터를 모두 입력해주세요'
        })
    }

    const addr = new Addr(body)
    
    if(!addr){
        return res.status(404).json({
            success : false,
            error : err
        })
    }

    addr.save().then(()=>{
        return res.status(201).json({
            success : true,
            id : 'addr._id',
            message : '주소록 등록 성공'
        })
    })
    .catch(error =>{
        return res.status(400).json({
            error,
            message : '주소록 등록 실패'
        })
    })

}

addrUpdate = async(req, res) => {
    const body = req.body

    if(!body){
        return res.status(400).json({
            success : false,
            error : '수정할 내용을 기재하세요'
        })
    }
    addr.findOne({_id : req.params.id},(err, addr)=>{
        if(err){
            return res.status(404).json({
                err,
                message : '주소록을 찾을 수 없습니다.'
            })
        }
        addr.name  = body.name
        addr.email = body.email
        addr.phone = body.phone

        addr.save().then(()=>{
            return res.status(200).json({
                success : true,
                id : addr._id,
                message : '주소록 수정 성공'
            })
        })

    })
}

addrDelete = async(req, res) => {
    await Addr.findOneAndDelete({_id : req.params.id},(err, addr) =>{
        if(err){
            return res.status(400).json({
                success : false,
                error : err
            })
        }
        if(!addr){
            return res.status(404).json({
                success : false,
                error : '찾을 수 없습니다'
            })
        }
        return res.status(200).json({
            success : true,
            data : addr
        })
    }).catch(err => console.log(err))

}

module.exports = {
    addrList,
    addrOne,
    addrInsert,
    addrUpdate,
    addrDelete
}



 




