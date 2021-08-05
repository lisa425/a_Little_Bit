const express = require('express');
const router = express.Router();
const { Test } = require("../models/Test");

router.post('/',(req,res)=>{
    //test 유저 정보를 client에서 가져와 DB에 저장
    const test = new Test(req.body);
    res.cookie('test',test);
    test.save((err,doc)=>{
        if(err) return res.json({ success:false, err })
        return res.status(200).json({ success:true })
    })
})

router.get('/result',(req,res)=>{
    console.log(req.cookies.test);
})

router.get('/getEarth',(req,res) => {
    //test 기록들을 DB에서 가져와서 클라이언트에 전송
    const cookie = req.cookies.test;
    Test.find().exec((err,tests) => {
        if(err) return res.status(400).send(err);
        res.status(200).json({success:true,tests,cookie})
    })
})

router.post('/getEarthDetail',(req,res) => {
    //개별 test 기록의 정보를 DB에서 가져와서 클라이언트에 전송
    Test.findOne({"_id":req.body.earthId}).exec((err,earthDetail) => {
        if(err) return res.status(400).send(err);
        res.status(200).json({success:true,earthDetail})
    })
})
module.exports = router