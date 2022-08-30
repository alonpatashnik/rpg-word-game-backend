const {User} = require("../models")
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    User.findAll().then((data)=> res.send(data))
})

router.post('/signup', (req, res)=>{
    User.create(req.body).then(newUser=>{
        const token = jwt.sign({
            id:newUser.id,
            email:newUser.email
        },process.env.RPG_SECRET,{
            expiresIn:"24h"
        })
        return res.json({
            token:token,
            user:newUser
        })
    }).catch(err=>{
        res.status(500).json({msg:"an error occurred",err})
    })
})

module.exports = router