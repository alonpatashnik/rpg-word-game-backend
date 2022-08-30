const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
const {User} = require("../models")
const jwt = require("jsonwebtoken")

router.get("/", (req,res) => {
    res.send('THIS IS WORKING!!!')
})

module.exports = router