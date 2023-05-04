const express = require('express')
const app = express();
const connectToMongo = require('./db')
connectToMongo()
const port = process.env.PORT || 3000
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

const sample =require('./model/sample')

app.get('/',async (req,res)=>{
    const data = await sample.find({});
    res.send(data)    
})


app.listen(port,()=>{
    console.log('local server connected');
})
