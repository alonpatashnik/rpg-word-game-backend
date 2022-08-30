const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes')

router.get("/", (req,res) => {
    res.send('THIS IS WORKING!!!')
})
router.use("/api/users", userRoutes)



module.exports = router