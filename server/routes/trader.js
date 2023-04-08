const express = require('express');
const router = express.Router();
const Provider = require('../models/Provider');
const Follower = require('../models/Follower');

//Get All providers
router.get('/provider/all', async(req, res) => {

})

//Provider register
router.post('/provider', async(req, res) => {
    const {server, id, password, nickName, fee} = req;

    {
        const provider = await Provider.findOne({account: id});
        if(provider)
        {
            return res.status(400).json({msg: 'Same Account already exists'});
        }
    }

    {
        const provider = await Provider.findOne({nickName});
        if(provider)
        {
            return res.status(400).json({msg: 'Same Nickname already exists'});
        }
    }
    const newProvider = new Provider({
        server,
        nickName,
        fee
    })
    const provider = await newProvider.save();
    return res.json(provider);

})

//Follower register
router.post('/follower', async(req, res) => {
    const {id, server, password, providerNickname, strategy} = req.body;
})

//Provider || Follower login
router.post('/login', async(req, res) => {
    const {server, id, password, strategy} = req.body;
})

//Get all of my providers
router.get('/follower/:id', async(req, res) => {
    const id = req.params.id;

})

//Get all of my followers
router.get('/provider/:id', async(req, res) => {
    const id = req.params.id;
})

module.exports = router;