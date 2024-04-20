const mongoose = require('mongoose');
const Book = require('./models/bookModel');

const booksDB = 'mongodb://localhost/books_db';
mongoose.connect(booksDB, {useNewUrlParser: true, useUnifiedTopology: true});

const getAllBooks = async () => {
    return await Book.find();
};

const createBook = async (newBook) => {
    const book = new Book(newBook);
    return await book.save();
};

const getBookById = async (id) => {
    return await Book.findById(id);
};

const updateBook = async (id, newBook) => {
    return await Book.findByIdAndUpdate(id, newBook, { new: true });
};

const deleteBook = async (id) => {
    return await Book.findByIdAndDelete(id);
};

module.exports = { getAllBooks, createBook, getBookById, updateBook, deleteBook };