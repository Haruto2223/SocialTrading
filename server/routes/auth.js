const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Client = require('../models/Client')
const auth = require('../middleware/auth')

//Load user
router.get('/', auth, async(req, res) => {
    
    const user = await Client.findById(req.user);
    res.json(user);
})

//User login
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
        const payload = {
            user: user.id
        };
        jwt.sign(payload, 'khs317', {expiresIn: '5 days'}, (err, token) => {
            if(err) throw err;
            res.json({token})
        })
    } catch(e)
    {
        res.status(500).send({msg: 'Server Error'})
    }
})

module.exports = router;