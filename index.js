const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require('mongoose')
const config = require('./config/key')

//client에서 오는 정보를 bodyParser로 분석해서 가져온다.
//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));
//application/json
app.use(bodyParser.json());
app.use(cookieParser());

mongoose.connect(config.mongoURI,{
    useNewUrlParser:true, useUnifiedTopology:true, 
    useCreateIndex:true, useFindAndModify:false
})
.then(()=>console.log('mongoDB is connected'))
.catch(err=>console.log(err))


app.use('/api/test', require('./routes/test'));



app.listen(port,() => console.log(`Example app listening on port ${port}`));
