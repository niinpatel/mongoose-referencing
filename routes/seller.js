const express = require('express');
const Seller = require('../models/seller');
const router = express.Router();

router.route('/').
    get(async(req, res) => {
    let seller = await Seller.find({});

    res.json(seller)

    }).
    post(async(req,res) => {
    let newSeller = new Seller(req.body);
    await newSeller.save();
    res.json(newSeller)
    });

module.exports = router;