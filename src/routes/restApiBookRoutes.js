const express = require('express');
const router = express.Router();
const bookController = require('../controllers/restApiBookController');

router.get('/api/books/', bookController.getAllBooks);
router.post('/api/books/', bookController.createBook);
router.get('/api/books/:id', bookController.getBookById);
router.put('/api/books/:id', bookController.updateBook);
router.delete('/api/books/:id', bookController.deleteBook);

module.exports = router;