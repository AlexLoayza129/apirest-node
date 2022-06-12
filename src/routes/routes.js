const { Router } = require('express');
const router = Router();

router.get('/', (req,res) => {
    res.send('Welcome to my API-REST <=========================================Alex Loayza - Full Stack Developer=========================================>');
});

module.exports = router;