const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema ({
    titulo: {
        type: String,
        required: true
    },
    editora: {
        type: String,
        required: true
    },
    foto: {
        type: String,
        validate: /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/
    },
    autores: [{
        type: String,
        required: true,
    }]
});

module.exports = mongoose.model('book', bookSchema);