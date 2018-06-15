const express = require('express');
const mongoose = require('mongoose');
const body = require('body-parser');
const db = require('./dbconnect');
const SellerRoutes = require('./routes/seller');
const CarRoutes = require('./routes/car');
const port = process.env.port || 1234;

const app = express();


app.use(body.json());
app.use(body.urlencoded({extended: true}));

app.use('/', SellerRoutes);
app.use('/car',CarRoutes);



app.listen(port, (err) => {if(err) throw err; console.log(`listening at ${port}`)})