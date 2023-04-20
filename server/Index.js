const express = require('express');
const mongoose = require('mongoose');
const trader = require('./routes/trader')

const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/trader', trader);

mongoose.connect('mongodb://192.168.112.96:27017')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('Database Error'))

const port = process.env.port || 5000;
app.listen(port, () => console.log(`Server running on ${port}`));
