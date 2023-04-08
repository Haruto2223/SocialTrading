const express = require('express');
const router = express.Router();
const Provider = require('../models/Provider');
const Follower = require('../models/Follower');

//Get All providers
router.get('/provider/all', async(req, res) => {
    try{
        const clients = await api.getproviderall();
        clients.map(async(client) => {
            try{
                const nick =  await Provider.findOne({id: client.id});
                client.nickName = nick;
            } catch(err){

            }
        })
        res.json(clients);
    } catch(err)
    {

    }
})

//Provider register
router.post('/provider', async(req, res) => {
    const {server, id, password, nickName, fee} = req;
    try{
        //api operation
        const clients = await api.providerRegister(server, id, password, fee);
        clients.map(async(client) => {
            try{
                let provider = await Provider.findOne({ nickName });

                if (provider) {
                  return res
                    .status(400)
                    .json({ errors: [{ msg: 'Provider already exists' }] });
                }
          
                provider = new Provider({
                  server,
                  nickName,
                  fee,
                  id
                });         
                await provider.save();
            } catch(err){
                
            }
        });        
        res.json(clients);
    } catch(err)
    {

    }
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