const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes')
const wordRoutes = require('./wordRoutes')

router.get("/", (req,res) => {
    res.send('THIS IS WORKING!!!')
})
router.use("/api/users", userRoutes)

router.use("/api/words", wordRoutes)


module.exports = router