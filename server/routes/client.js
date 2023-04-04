const express = require('express');
const router = express.Router();
const Client = require('../models/Client');
const {check, validationResult} = require('express-validator');

router.post('/', 
    check('firstName', 'FirstName is required').notEmpty(),
    check('lastName', 'LastName is required').notEmpty(),
    check('email', 'Please include valid email').isEmail(),
    check('password', 'Please enter more than 6 characters').isLength({min: 6}),

    async(req, res) => {
        const errors = validationResult(req);
        console.log(req.body);
        if(!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }

        const {firstName, lastName, email, password, category} = req.body;
        const newClient = new Client({
            firstName,
            lastName,
            email,
            password,
            category
        });
        await newClient.save();
        res.json({'msg': 'Successfully created'})
    }
)

module.exports = router;