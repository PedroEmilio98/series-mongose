const mongoose = require('mongoose');

const serieSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enumValues: ['quero', 'assistida', 'assistindo']
    },
    comments: [String]
})

const serie = mongoose.model('Serie', serieSchema);

module.exports = serie;