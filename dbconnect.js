const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb://localhost:27017/cardb', (err) => {if(err) throw err; console.log('Connected  to database')});