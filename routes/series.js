//rotas para as funcoes de series

const express = require('express');
const { Model } = require('mongoose');
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
router.get('/excluir/:id', seriesControllers.formRemove.bind(null, models));
router.post('/excluir/:id', seriesControllers.remove.bind(null, models));
router.get('/editar/:id', seriesControllers.formEdit.bind(null, models));
router.post('/editar/:id', seriesControllers.edit.bind(null, models));
router.get('/info/:id', seriesControllers.info.bind(null, models));
router.post('/info/:id', seriesControllers.addComment.bind(null, models));

module.exports = router;