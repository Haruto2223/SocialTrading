const express = require('express');
const router = express.Router();
const Client = require('../models/Client');
const { check, validationResult } = require('express-validator');

//get all users
router.get('/', async(req, res) => {
    try{
        const clients = await Client.find();
        res.json(clients);
    } catch(err)
    {

    }
})

router.post('/login', async(req, res) => {
    const {email, password} = req.body;
    try{
        let user = await Client.findOne({email});
        if(!user)
        {
            return res.status(401).json({msg: 'User not found'});
        }
        if(password !== user.password)
        {
            return res.status(400).json({msg: 'Password incorrect'});
        }
        res.json({user: user.id});
    } catch(e)
    {
        res.status(500).send({msg: 'Server Error'})
    }
})

router.post('/',
    check('firstName', 'FirstName is required').notEmpty(),
    check('lastName', 'LastName is required').notEmpty(),
    check('email', 'Please include valid email').isEmail(),
    check('password', 'Please enter more than 6 characters').isLength({ min: 6 }),

    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { firstName, lastName, email, password, category } = req.body;
        try {
            let User = await Client.findOne({ email });
            if (User) {
                return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
            }

            const newClient = new Client({
                firstName,
                lastName,
                email,
                password,
                category
            });
            await newClient.save();
            res.json({ 'msg': 'Successfully created' })
            
        } catch (e) {
            res.status(500).send('Server Error');
        }
    }
)

module.exports = router;