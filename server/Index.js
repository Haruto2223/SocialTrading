const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.get('/', (req, res) => res.json({'msg': 'hello'}));
app.use('/trader', require('./routes/trader'))

mongoose.connect('mongodb://127.0.0.1:27017')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('Database Error'))

const port = process.env.port || 5000;
app.listen(port, () => console.log(`Server running on ${port}`));