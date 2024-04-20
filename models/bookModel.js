const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    author: String
}, { versionKey: false }); // Disable versionKey

module.exports = mongoose.model('Book', bookSchema);