const mongoose = require('mongoose')


const cardSchema = new mongoose.Schema({
    name: { type: String, require: true },
    cardNumber: { type: Number, require: true },
    balance: { type: Number, default: 0 },
    limit: { type: Number, require: true }  
})

module.exports = mongoose.model('card', cardSchema)