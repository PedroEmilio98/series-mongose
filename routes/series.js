//rotas para as funcoes de series

const express = require('express');
const seriesControllers = require('../controllers/series');

const router = express.Router();

//importa as dependencias dos models e passa para as views 
const serie = require('../models/serie');
const models = {
    serie
}

router.get('/', seriesControllers.index.bind(null, models));
router.get('/novaserie', seriesControllers.formCreate.bind(null, models));
router.post('/novaserie', seriesControllers.create.bind(null, models));

module.exports = router;