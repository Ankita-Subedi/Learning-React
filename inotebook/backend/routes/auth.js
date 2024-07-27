const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', async(req, res)=> {
    try{
        console.log(req.body)
    res.send(req.body);
    const user = User(req.body)
    user.save()
    }catch (error) {
        if (error.code === 11000) {
            // Duplicate key error
            res.status(400).send({ error: 'Email already exists' });
        } else {
            console.error(error);
            res.status(500).send({ error: 'Internal Server Error' });
        }
    }
});

module.exports = router