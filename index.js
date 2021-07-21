const express = require('express');
const app = express();
const port = 5000;
const { User } = require("./models/User");
const bodyParser = require("body-parser");

//client에서 오는 정보를 bodyParser로 분석해서 가져온다.
//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));
//application/json
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://chaewon:thtldmlznzl425@alittlebit.oxgxw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false
}).then(()=>console.log('mongoDB is connected')).catch(err=>console.log(err))


app.get('/',(req,res)=>res.send('Hello World!'))

app.post('/test',(req,res)=>{
    //test 유저 정보를 client에서 가져와 DB에 저장
    const user = new User(req.body);
    user.save((err,doc)=>{
        if(err) return res.json({ success:false, err })
        return res.status(200).json({ success:true })
    })
})

app.get('/api/hello',(req,res) => {
    console.log('hi')
})
app.post('/api/users/test',(req,res) => {
    const user = new User(req.body)
    user.save((err,userInfo) => {
        if(err) return res.json({success:false,err})
        return res.status(200).json({
            success:true
        })
    })
})
app.get('/api/result',(req,res) => {
    
})

app.listen(port,() => console.log(`Example app listening on port ${port}`));
