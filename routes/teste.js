//rotas para as funcoes de series
const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    //res.send('ola');
    res.render('teste/index')
});

module.exports = router;