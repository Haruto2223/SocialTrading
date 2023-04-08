const express = require('express');
const router = express.Router();
const Provider = require('../models/Provider');

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