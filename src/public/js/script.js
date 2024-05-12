$(document).ready(function () {  
    function renderBooks(books) {
        var booksList = $('#booksList');
        booksList.empty();
        if (books.length === 0) {
            booksList.append('<p>No books</p>');
        } else {
            var ul = $('<ul></ul>');
            books.forEach(function (book) {
                var li = $('<li data-book-id="' + book._id + '"></li>');
                var deleteButton = $('<button class="deleteButton">Delete</button>');
                var editButton = $('<button class="editButton">Edit</button>');
                li.append(document.createTextNode(book.title + ' - ' + book.author));
                li.append(deleteButton);
                li.append(editButton);
                ul.append(li);
            });
            booksList.append(ul);
        }
    }
    
    function fetchBooks() {
        $.ajax({
            url: '/api/books',
            type: 'GET',
            success: function (data) {
                renderBooks(data);
            },
            error: function (error) {
                console.error('Error fetching books:', error);
            }
        });
    }

    fetchBooks();

    $('#addBookForm').submit(function (event) {
        event.preventDefault();
        var title = $('#title').val();
        var author = $('#author').val();
        $.ajax({
            url: '/api/books',
            type: 'POST',
            data: { title: title, author: author },
            success: function () {
                fetchBooks();
                $('#title').val('');
                $('#author').val('');
            },
            error: function (error) {
                console.error('Error adding book:', error);
            }
        });
    });

    $('#booksList').on('click', '.deleteButton', function () {
        var bookId = $(this).parent().data('book-id');
        $.ajax({
            url: '/api/books/' + bookId,
            type: 'DELETE',
            success: function () {
                fetchBooks();
            },
            error: function (error) {
                console.error('Error deleting book:', error);
            }
        });
    });

    $('#booksList').on('click', '.editButton', function () {
        var bookId = $(this).parent().data('book-id');
        $.ajax({
            url: '/api/books/' + bookId,
            type: 'GET',
            success: function (data) {
                $('#editBookId').val(bookId);
                $('#editTitle').val(data.title);
                $('#editAuthor').val(data.author);
                $('#editModal').show();
            },
            error: function (error) {
                console.error('Error fetching book details:', error);
            }
        });
    });

    $('#editBookForm').submit(function (event) {
        event.preventDefault();
        var bookId = $('#editBookId').val();
        var title = $('#editTitle').val();
        var author = $('#editAuthor').val();
        $.ajax({
            url: '/api/books/' + bookId,
            type: 'PUT',
            data: { title: title, author: author },
            success: function () {
                fetchBooks();
                $('#editModal').hide();
            },
            error: function (error) {
                console.error('Error updating book:', error);
            }
        });
    });

    $(window).click(function(event) {
        var modal = $('#editModal');
        if (event.target === modal[0]) {
            modal.hide();
        }
    });
});