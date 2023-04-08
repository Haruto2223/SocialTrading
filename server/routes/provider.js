const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Provider = require('../models/Provider')

router.post('/', auth, (req, res) => {
    const {email, password, server, fee, nickname} = req.body;
    console.log(email);
})

module.exports = router;