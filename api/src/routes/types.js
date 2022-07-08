const { Router } = require('express');
const { Type } = require('../db');


const router = Router();

router.get("/", async (req, res, next) => {
    try {
        const allTypes = await Type.findAll()
        res.send(allTypes)
    } catch (error) {
        next(error)
    }
})

module.exports = router