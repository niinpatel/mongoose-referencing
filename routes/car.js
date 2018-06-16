const express = require('express');
const Seller = require('../models/seller');
const Car = require('../models/car');
const router = express.Router();

router.route('/:sid').
    get(async(req, res) => {
        const {sid} = req.params;

        let seller;
        try{seller = await Seller.findById(sid).populate('cars', 'model -_id');}
        catch(err) {res.send(err)}

        res.json(seller)
}).
    post(async(req,res) => {

        const {sid} = req.params;

        let newCar = new Car(req.body);

        let seller;
        try {seller = await Seller.findById(sid);}
        catch(err) {res.send(err)}

        newCar.seller = seller;

        try {await newCar.save();}
        catch(err) {res.send(err)}

        seller.cars.push(newCar);

        try {await seller.save();}
        catch(err) {res.send(err)}

        res.json(newCar)

});


module.exports = router;