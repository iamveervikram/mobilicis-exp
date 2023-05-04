const mongoose = require('mongoose')
const { Schema } = mongoose;

const sample=new Schema({
    id: Number,
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    income: String,
    city: String,
    car: String,
    quote: String,
    phone_price: Number
})

module.exports=mongoose.model('sample',sample)
