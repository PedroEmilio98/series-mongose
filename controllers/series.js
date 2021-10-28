const index = ({ serie }, req, res) => {
    serie.find({}, (err, docs) => {
        res.render('series/index', { series: docs });
    })
};

const create = ({ serie }, req, res) => {
    const Serie = new serie({
        name: 'Missa da meia noite',
        status: 'assistida',
    })
    Serie.save(() => console.log('saved'));
};

const formCreate = ({ serie }, req, res) => {
    serie.find({}, (err, docs) => {
        res.render('series/novaserie', { series: docs });
    })
}


module.exports = {
    index,
    create,
    formCreate
}