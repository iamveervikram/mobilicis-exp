const mongoose = require('mongoose')
const mongoURI='mongodb+srv://iamveervikram:iamveervikram@cluster0.cwlubiy.mongodb.net/mobilicis'

const connectToMongo=()=>{

mongoose.connect(mongoURI,{
    useNewUrlParser:true,
}).then(()=>console.log('mongoose connected')).catch((err)=>console.log(err))

}


module.exports = connectToMongo


