const express = require('express');
const router = express.Router();
const { Test } = require("../models/Test");

router.post('/',(req,res)=>{
    //test 유저 정보를 client에서 가져와 DB에 저장
    const test = new Test(req.body);
    test.save((err,doc)=>{
        if(err) return res.json({ success:false, err })
        return res.status(200).json({ success:true })
    })
})

router.get('/result',(req,res)=>{
 
})

module.exports = router