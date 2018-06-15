const express = require('express');
const Seller = require('../models/seller');
const Car = require('../models/car');
const router = express.Router();

router.route('/:sid').
    get((req, res) => {
        const {sid} = req.params;
        Car.find({'seller': sid}, (err, cars) =>
        {
            if(err) throw err;
            res.json(cars)
        })
}).
    post((req,res) => {
        const {sid} = req.params;
        let newCar = new Car(req.body);
        newCar.seller = sid;
        newCar.save((err) => {
            if(err) throw err;

            Seller.findById(sid, (err, seller) => {
                seller.cars.push(newCar)
                seller.save()
            });

            res.json(newCar)

        });

});


module.exports = router;