const Book = require('../models/bookModel');

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createBook = async (req, res) => {
    const book = new Book({
        title: req.body.title,
        author: req.body.author
    });
    try {
        const newBook = await book.save();
        res.status(201).json(newBook);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (book) {
            res.json(book);
        } else {
            res.status(404).json({ message: 'Book not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const updateBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (book) {
            res.json(book);
        } else {
            res.status(404).json({ message: 'Book not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const deleteBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (book) {
            res.status(204).json({ message: 'Book deleted' });
        } else {
            res.status(404).json({ message: 'Book not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = { getAllBooks, createBook, getBookById, updateBook, deleteBook };