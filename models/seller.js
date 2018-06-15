const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
    name: {type: String},
    email: {type: String},
    cars: [{type: mongoose.Schema.Types.ObjectId, ref: 'Car'}]
})

module.exports = mongoose.model('Seller', sellerSchema, 'carsellers');