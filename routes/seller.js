const express = require('express');
const Seller = require('../models/seller');
const router = express.Router();

router.route('/').
get((req, res) => {
    Seller.find({}, (err, sellers) => {
        res.json(sellers)
    })
}).
post((req,res) => {
    let newSeller = new Seller(req.body);
    newSeller.save((err) => {
        if(err) throw err;
        res.json(newSeller)
    });
});

module.exports = router