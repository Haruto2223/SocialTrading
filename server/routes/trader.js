const express = require('express');
const router = express.Router();
const Provider = require('../models/Provider');
const Follower = require('../models/Follower');
const auth = require('../middleware/auth');
const jwt = require('jsonwebtoken');
const Server = require('../models/servers');
const api = require('../api');

//Get Trader Info
router.get('/', auth, async (req, res) => {
    try {
        let trader = await Provider.findOne({ accountID: req.trader.id });
        if (trader) {
            return res.json({ category: 'provider', trader })
        }
        trader = await Follower.findOne({ accountID: req.trader.id });
        return res.json({ category: 'follower', trader })
    } catch (e) {
        res.status(500).send('Server Error')
    }

})

//Get All providers
router.get('/provider/all', async(req, res) => {
    try{
        var clients;
        // select ip, port from Server
        const array = Server.findById();
        array.forEach(async(server) => {
            clients.append(await api.getproviderall(server));
            clients.map(async(client) => {
                try{
                    const nick =  await Provider.findOne({id: client.id});
                    client.nickName = nick;
                } catch(err){
    
                }
            });            
        });
        res.json(clients);
    } catch (err) {
        res.status(500).send('Server Error');
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
        const payload = { id, category: 'provider' };
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
        // //api operation
        // const clients = await api.followerRegister(server, id, password, strategy, providerNickname);
        // clients.map(async(client) => {
        //     try{
        //         let follower = await Follower.findOne({accountID: client.id});

        //         if (follower) {
        //           return res
        //             .status(400)
        //             .json({ errors: [{ msg: 'Provider already exists' }] });
        //         }
          
        //         follower = new Follower({
        //           id
        //         });         
        //         await follower.save();
        //     } catch(err){
        //         return res.status(400).json({errors: [{ msg: 'failed to verify your account'}] })
        //     }
        // });        
        // res.json(clients);
        let follower = await Follower.findOne({ accountID: id });

        if (follower) {
            return res.status(400).json({ msg: 'Already exists' });
        }
        follower = new Follower({
            accountID: id, server
        });
        await follower.save();
        const payload = { id, category: 'follower' };
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
    const { server, id, password } = req.body;
    try {
        //api operation
        // const clients = await api.login(server, id, password, category);
        // res.json(clients);
        let trader = await Provider.findOne({ accountID: id });
        if (trader) {
            return res.json({ category: 'provider', trader })
        }
        trader = await Follower.findOne({ accountID: id });
        return res.json({ category: 'follower', trader })
    } catch (err) {
        res.status(500).send('Server Error');
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