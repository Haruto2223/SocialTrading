const express = require('express');
const router = express.Router();
const Provider = require('../models/Provider');
const Follower = require('../models/Follower');
const jwt = require('jsonwebtoken');

//Get Trader Info
router.get('/', async (req, res) => {

})

//Get All providers
router.get('/provider/all', async (req, res) => {
    try {
        const clients = await api.getproviderall();
        clients.map(async (client) => {
            try {
                const nick = await Provider.findOne({ id: client.id });
                client.nickName = nick;
            } catch (err) {

            }
        })
        res.json(clients);
    } catch (err) {

    }
})

//Provider register
router.post('/provider', async (req, res) => {
    const { server, id, password, nickname, fee } = req.body;
    try {
        //api operation
        // const checked = await api.providerRegister(server, id, password, fee);
        // if(checked) 
        let provider = await Provider.findOne({ accountID: id });
        if (provider) {
            return res.status(400).send({ msg: 'Already exists' })
        };
        provider = new Provider({
            server, nickname, fee, accountID: id
        })
        await provider.save();
        const payload = { id };
        jwt.sign(payload, 'khs317', { expiresIn: '5 days' }, (err, token) => {
            if (err) throw err;
            res.json({ token })
        })
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
})

//Follower register
router.post('/follower', async (req, res) => {
    const { id, server, password } = req.body;
    try {
        //api operation
        // const clients = await api.followerRegister(server, id, password, strategy, providerNickname);
        let follower = await Follower.findOne({ accountID: id });

        if (follower) {
            return res.status(400).json({ msg: 'Already exists' });
        }
        follower = new Follower({
            accountID: id, server
        });
        await follower.save();
        const payload = { id };
        jwt.sign(payload, 'khs317', { expiresIn: '5 days' }, (err, token) => {
            if (err) throw err;
            return res.json({ token })
        })

    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error');
    }
})

//Provider || Follower login
router.post('/login', async (req, res) => {
    const { server, id, password, category } = req.body;
    try {
        //api operation
        const clients = await api.login(server, id, password, category);
        res.json(clients);
    } catch (err) {

    }
})

//Get all of my providers
router.get('/follower/:id', async (req, res) => {
    const id = req.params.id;
    try {
        //api operation
        const clients = await api.getProviders(id);
        res.json(clients);
    } catch (err) {

    }
})

//Get all of my followers
router.get('/provider/:id', async (req, res) => {
    const id = req.params.id;
    try {
        //api operation
        const clients = await api.getFollowers(id);
        res.json(clients);
    } catch (err) {

    }
})

module.exports = router;