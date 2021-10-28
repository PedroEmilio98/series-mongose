//rotas para cada diretorio da aplicacao

const express = require('express');
const pagesControllers = require('../controllers/pages');

const router = express.Router();

router.get('/', pagesControllers.index);
router.get('/sobre', pagesControllers.sobre);

module.exports = router;