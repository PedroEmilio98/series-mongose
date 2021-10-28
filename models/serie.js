const mongoose = require('mongoose');

const serieSchema = mongoose.Schema({
    name: String,
    status: {
        type: String,
        enumValues: ['quero assistir', 'já assisti', 'assistindo']
    },
    comments: [String]
})

const serie = mongoose.model('Serie', serieSchema);

module.exports = serie;