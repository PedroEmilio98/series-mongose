const bodyParser = require("body-parser");

const labels = [
    { id: 'quero', name: 'Quero assistir' },
    { id: 'assistindo', name: 'Assistindo' },
    { id: 'assistida', name: 'Já assisti' }
];

const index = async ({ serie }, req, res) => {
    const docs = await serie.find({});
    res.render('series/index', { series: docs, labels });

};


const formCreate = async ({ serie }, req, res) => {
    const docs = await serie.find({});
    res.render('series/novaserie', { series: docs, labels, errors: [] });
}

const create = async ({ serie }, req, res) => {
    try {
        const Serie = new serie(req.body);
        await Serie.save();
        res.redirect('/series');
    } catch (err) {
        const errors = Object.keys(err.errors);
        res.render('series/novaserie', { errors, labels });
    }
};

const formEdit = async ({ serie }, req, res) => {
    const serieEditar = await serie.findOne({ _id: req.params.id });
    res.render('series/editar', { serie: serieEditar, labels, errors: [] });
}

const edit = async ({ serie }, req, res) => {
    const serieEdit = await serie.findOne({ _id: req.params.id });
    serieEdit.name = req.body.name;
    serieEdit.status = req.body.status;
    try {
        await serieEdit.save();
        res.redirect('/series');
    } catch (err) {
        const errors = Object.keys(err.errors);
        res.render('series/editar', { errors, labels, serie: serieEdit });
    }
};

const info = async ({ serie }, req, res) => {
    const serieInfo = await serie.findOne({ _id: req.params.id });
    res.render('series/info', { serie: serieInfo, labels })
}

const addComment = async ({ serie }, req, res) => {
    await serie.updateOne({ id: req.params.id }, { $push: { comments: req.body.comentario } });
    res.redirect('/series/info/' + req.params.id);
}

const remove = async ({ serie }, req, res) => {
    await serie.deleteOne({ _id: req.params.id });
    res.redirect('/series');
}


module.exports = {
    index,
    create,
    formCreate,
    remove,
    formEdit,
    edit,
    info,
    addComment
}