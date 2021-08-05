const express = require('express');
const app = express();
const port = 5000;
const { Test } = require("./models/Test");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require('mongoose')

//client에서 오는 정보를 bodyParser로 분석해서 가져온다.
//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));
//application/json
app.use(bodyParser.json());
app.use(cookieParser());

mongoose.connect('mongodb+srv://chaewon:thtldmlznzl425@alittlebit.oxgxw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false
}).then(()=>console.log('mongoDB is connected')).catch(err=>console.log(err))


app.get('/',(req,res)=>res.send('Hello World!'))
app.use('/api/test', require('./routes/test'));


app.get('/api/result',(req,res) => {
    
})

app.listen(port,() => console.log(`Example app listening on port ${port}`));
