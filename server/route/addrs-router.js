const express = require('express')

const AddrCtrl = require('../controller/addrs-ctrl')
const router = express.Router()

router.post('/addr',AddrCtrl.addrInsert)
router.put('/addr/:id',AddrCtrl.addrUpdate)
router.delete('/addr/:id',AddrCtrl.addrDelete)
router.get('/addr/:id',AddrCtrl.addrOne)
router.get('/addrs',AddrCtrl.addrList)

module.exports = router