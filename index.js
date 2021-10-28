const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config()
const PORT = process.env.PORT || 3000;

//requisicoes de rotas
const path = require('path');
const pages = require('./routes/pages');
const series = require('./routes/series');
const teste = require('./routes/teste');

//requisicoes para o banco de dados
const mongodb = process.env.MONGO;
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//view engine: EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//processar as requisicoes POST
app.use(bodyParser.urlencoded({ extended: true }));

//assets
app.use(express.static('public'));

//faz o direcionamento das requisicoes para as rotas usando a primeira / 
app.use('/', pages);
app.use('/series', series);
app.use('/teste', teste);

//conexao com o mongo DB utilizando ATLAS
mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
    }).catch(err => {
        console.log(err)
    })

