const {Word} = require("../models")
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    Word.findAll().then((data)=> res.send(data))
})

router.get('/random', (req, res) => {
    const rand = Math.floor((Math.random() * 15) + 1)
    Word.findByPk(rand).then((data)=> res.send(data))
})

module.exports = router
