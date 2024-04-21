const BooksDB = require('../database');

const getAllBooks = async (req, res) => {
    try {
        const books = await BooksDB.getAllBooks();
        res.render('index', { books: books });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const deleteBook = async (req, res) => {
    try {
        const book = await BooksDB.deleteBook(req.params.id);
        if (book) {
            res.redirect('/');
        } else {
            res.status(404).json({ message: 'Book not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createBook = async (req, res) => {
    const { author, title } = req.body;
    try {
        const newBook = await BooksDB.createBook({ author: author, title: title });
        res.redirect('/');
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getBookToEdit = async (req, res) => {
    try {
        const book = await BooksDB.getBookById(req.params.id);
        if (book) {
            res.render('edit', { book: book });
        } else {
            res.status(404).json({ message: 'Book not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const updateBook = async (req, res) => {
    try {
        const { author, title } = req.body;
        const book = await BooksDB.updateBook(req.params.id, { author: author, title: title });
        if (book) {
            res.redirect('/');
        } else {
            res.status(404).json({ message: 'Book not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { getAllBooks, createBook, getBookToEdit, updateBook, deleteBook };