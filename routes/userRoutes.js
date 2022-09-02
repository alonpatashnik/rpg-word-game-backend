const {User} = require("../models")
const rpg = require("jsonwebtoken")
const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
require('dotenv').config()

router.get('/', (req, res) => {
    User.findAll().then((data)=> res.send(data))
})

router.post('/signup', (req, res)=>{
    console.log('signupRequest')
    console.log(req.body)
    User.create(req.body).then(newUser=>{
        const token = rpg.sign({
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
        console.log(err)
        res.status(500).json({msg:err})
    })
})

router.post("/login",(req,res)=>[
    User.findOne({
        where:{
            email:req.body.email
        }
    }).then(foundUser=>{
        if(!foundUser){
            return res.status(401).json({msg:"invalid login credentials!"})
        }
        else if(!bcrypt.compareSync(req.body.password,foundUser.password)){
            return res.status(401).json({msg:"invalid login credentials!"})
        } else {
            const token = rpg.sign({
               id:foundUser.id,
               email:foundUser.email
            },process.env.RPG_SECRET,{
                expiresIn:"2h"
            })
            return res.json({
                token:token,
                user:foundUser
            })
        }
    }).catch(err=>{
        res.status(500).json({msg:"an error occurred",err})
    })
])

router.get("/check-token",(req,res)=>{
    const token = req.headers.authorization.split(" ")[1]
    console.log(token)
    try{
        const userData = rpg.verify(token,process.env.RPG_SECRET)
        User.findByPk(userData.id).then(userData=>{
            res.json(userData)
        }).catch(err=>{
            res.status(500).json({msg:"an error occurred",err})
        })
    } catch{
      res.status(403).json({msg:"invalid token"})
    }
})

module.exports = router