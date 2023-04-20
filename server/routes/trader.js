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
    // await api.getmyinfo('192.168.112.95', 5001, id);
    try {
        if (req.trader.category === 'provider') {
            let trader = await Provider.findById(req.trader.id);
            if (trader) {
                return res.json({ trader, category: 'provider' })
            }
            return res.status(404).json({ msg: 'Trader not found' })
        }
        trader = await Follower.findById(req.trader.id);
        if (trader) {
            return res.json({ category: 'follower', trader });
        }

    } catch (e) {
        console.log(e);
        res.status(500).send('Server Error') 
    }

})

//Get All providers
router.get('/provider/all', async (req, res) => {
    try {
        const providers = await Provider.find();
        res.json(providers);
    } catch (err) {
        res.status(500).send('Server Error');
    }
})

//Provider register
router.post('/provider', async (req, res) => {
    const { server, id, password, nickname, fee } = req.body;
    try {
        //api operation
        // const checked = api.providerRegister('192.168.112.95', 5001, id, password, fee);
        // console.log(checked)
        // if(checked) 
        let provider = await Provider.findOne({ accountID: id });
        if (provider) {
            return res.status(400).json({ msg: 'Already exists' })
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
        //const checked = await api.login('192.168.112.95', 5001, id, password);
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
        // const checked = await api.login('192.168.112.95', 5001, id, password);
        let trader = await Provider.findOne({ accountID: id });
        if (trader) {
            const payload = { id: trader.id, category: 'provider' };
            jwt.sign(payload, 'khs317', { expiresIn: '5 days' }, (err, token) => {
                if (err) throw err;
                return res.json({ token })
            })
        }
        else {
            trader = await Follower.findOne({ accountID: id });
            if (trader) {
                const payload = { id: trader.id, category: 'follower' };
                jwt.sign(payload, 'khs317', { expiresIn: '5 days' }, (err, token) => {
                    if (err) throw err;
                    return res.json({ token })
                })
            }
            else res.status(404).json({ msg: 'Trader not found' })
        }
    } catch (err) {
        res.status(500).send('Server Error');
    }
})

//Get all of my providers
// router.get('/follower/:id', async (req, res) => {
//     //await api.getProviders(server, port, id)
//     const id = req.params.id;
//     try {
//         //api operation
//         const clients = await api.getProviders(id);
//         res.json(clients);
//     } catch (err) {

//     }
// })

//Get Provider Info By ID
router.get('/provider/:id', async (req, res) => {
    //await api.getFollowers(server, port, id)
    const id = req.params.id;
    try {
        //api operation
        // const clients = await api.getFollowers(id);
        // res.json(clients);
        const provider = await Provider.findOne({accountID: id})
        res.json(provider);
    } catch (err) {

    }
})

//Get All of My Followers
router.get('/provider', auth, async (req, res) => {
    let followers = await Follower.find();
    let data = [];
    for(let follower of followers)
    {
        if(follower.providers.some(provider => provider.provider == req.trader.id)) data.push(follower)
    }
    // let data = followers.filter(follower => {
    //     follower.providers.some(provider => provider.provider == req.trader.id) == true
    // });
    res.json(data)
    // res.json(followers)
})

//Get All of My Providers
router.get('/follower', auth, async (req, res) => {
    try {
        const follower = await Follower.findById(req.trader.id)
        if(!follower)
        {
            return res.status(404).json({msg: 'Follower not found'})
        }
        const myFunction = async(item) =>  {
            const provider = await Provider.findById(item.provider.toString());
            return provider;
        }
        const providers = await Promise.all(follower.providers.map(myFunction));
        res.json(providers)
    } catch(e)
    {
        res.status(400).send('Server Error');
    }
})

//follow operation: follow(server, port, followerId, password, strategy, providerId)
router.post('/follow', auth, async (req, res) => {
    const [providerNickname, strategy] = req.body;
    const provider = await Provider.findOne({ nickname: providerNickname });
    const follower = await Follower.findOne({ accountID: req.trader.id });
    if (follower.providers.some(item => item.provider === provider.id)) {
        return res.status(400).json({ msg: 'Already followed' })
    }
    follower.providers.unshift({ provider: provider.id, strategy });
    await follower.save();
    res.json({ msg: 'Successfully followed' })
})

//Fake Provider Maker
// router.post('/fake', async (req, res) => {
//     for (let i = 0; i < 30; i++) {
//         const accountID = Math.floor(Math.random() * 10000);
//         const length = 6;

//         // Define all possible characters that could go into your string
//         const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

//         let nickname = '';

//         for (let k = length; k > 0; --k) {
//             // Generate a random index between 0 and the available character count
//             const randomIndex = Math.floor(Math.random() * chars.length);

//             // Add the randomly selected character to the result string
//             nickname += chars[randomIndex];
//         }
//         const server = 'MT5-Live1';
//         const fee = Math.floor(Math.random() * 100);
//         const data = [];
//         const password = 'rlagusdnd';
//         for (let j = 0; j < 7; j++) data.push(Math.floor(Math.random() * 1000));
//         const newProvider = new Provider({ accountID, server, fee, data, nickname, password });
//         await newProvider.save();
//     }
//     res.send('Success')
// })

router.delete('/delete', async(req, res) => {
    const followers = await Follower.find();
    for(const fol of followers)
    {
        await Follower.findOneAndRemove({_id: fol.id})
    }
    res.send('success')
})

//Fake Follower Maker
router.post('/fake', async(req, res) => {
    const providers = await Provider.find();
    const strategyArray = ['Auto Scale', 'Fixed Lot', 'Copy Reverse']
    for (const prov of providers)
    {
        for(let i = 0; i < 3; i++)
        {
            const accountID = Math.floor(Math.random() * 10000);
            const server = 'MT5-Live1';
            const strategyId = Math.floor(Math.random() * 3);
            const follower = new Follower({
                accountID, server, providers: {strategy: strategyArray[strategyId], provider: prov.id}
            })
            await follower.save();
        }
    }
    res.send('success')
})

module.exports = router;