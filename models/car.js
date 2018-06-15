const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    model: {type: String},
    year: {type: String},
    seller: {type: mongoose.Schema.Types.ObjectId, ref: 'Seller'}
});


module.exports = mongoose.model('Car', carSchema)