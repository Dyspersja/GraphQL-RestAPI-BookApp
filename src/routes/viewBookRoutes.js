const express = require('express');
const router = express.Router();
const bookController = require('../controllers/viewBookController');

router.get('/', bookController.getAllBooks);
router.post('/add', bookController.createBook);
router.post('/del/:id', bookController.deleteBook);
router.post('/edit/:id', bookController.getBookToEdit);
router.post('/update/:id', bookController.updateBook);

module.exports = router;