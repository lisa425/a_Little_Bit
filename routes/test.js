const express = require('express');
const router = express.Router();
const { Test } = require("../models/Test");

let count = 0;
router.post('/',(req,res)=>{
    //test 유저 정보를 client에서 가져와 DB에 저장
    const test = new Test(req.body);
    count++
    test.count = count;
    const maxage = 3600000 * 24 * 14 // 3600000ms 는 1시간->즉 2주를 유효기간으로 두겠다.
    res.cookie('test',test,{
        maxAge: maxage
    });
    test.save((err,doc)=>{
        if(err) return res.json({ success:false, err })
        return res.status(200).json({ success:true,test })
    })
})

//test 결과를 전송
router.get('/getResult',(req,res)=>{
    const cookie = req.cookies.test;
    res.status(200).json({success:true,cookie})
})

//참여자수를 전송
router.get('/getCount',(req,res)=>{
    const count = req.cookies.test.count;
    res.status(200).json({success:true,count})
})

router.get('/getEarth',(req,res) => {
    //test 기록들을 DB에서 가져와서 클라이언트에 전송
    //cookie를 기준으로 나의 테스트 정보를 전송 
    let cookie = {};
    let userid = '';
    let mytest = {};

    if(req.cookies.test !== undefined){
        cookie = req.cookies.test;
        userid = cookie._id;
        Test.findById(userid,function(err,test){
        mytest = test;
    });
    }else{
        cookie = undefined;
        userid = undefined;
        mytest = undefined;
    }
    
    Test.find().exec((err,tests) => {
        if(err) return res.status(400).send(err);
        res.status(200).json({success:true,tests,cookie,mytest})
    });
})

router.post('/searchEarth',(req,res) => {
    //클라이언트에서 검색한 이름 키워드로 DB에서 기록을 검색
    const name = req.body.keyword;
    Test.find({name:new RegExp(name)})
    .lean()
    .exec((err,searchList) => {
        if(err) return res.status(400).send(err);
        res.status(200).json({success:true,searchList})
    });
})

router.post('/getEarthDetail',(req,res) => {
    //개별 test 기록의 정보를 DB에서 가져와서 클라이언트에 전송
    const cookie = req.cookies.test;
    Test.findOne({"_id":req.body.earthId}).exec((err,earthDetail) => {
        if(err) return res.status(400).send(err);
        res.status(200).json({success:true,earthDetail,cookie})
    })
})

router.post('/getmessage',(req,res) => {
    const userid = req.body._id;
    const message = req.body.message;
    //쿠키를 기준으로 나의 테스트 내용을 찾아 메세지를 저장
    Test.findOne({"_id":userid}).exec((err,mytest)=>{
        mytest.message = message;
        mytest.save();
        if(err) return res.status(400).send(err);
        res.status(200).json({success:true,mytest,message});
    });
})
module.exports = router