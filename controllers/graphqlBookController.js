const Book = require('../models/bookModel');
var { buildSchema } = require('graphql');

var schema = buildSchema(`
    input BookInput {
        title: String
        author: String
    }
    type Book {
        id: ID!
        title: String
        author: String
    }
    type Query {
        getBook(id: ID!): Book
        getBooks: [Book!]!
    }
    type Mutation {
        createBook(input: BookInput): Book
        updateBook(id: ID!, input: BookInput): Book
        deleteBook(id: ID!): Boolean
    }
`);

var root = {
    getBook: async ({id}) => {
        const book = await Book.findById(id);
        if (book) {
            return book;
        } else {
            throw new Error('no book exists with id ' + id);
        }
    },
    
    getBooks: async () => {
        const books = await Book.find();
        return books;
    },

    createBook: async ({input}) => {
        const book = new Book({
            title: input.title,
            author: input.author
        });
        try {
            const newBook = await book.save();
            return newBook;
        } catch (err) {
            throw new Error({ message: err.message });
        }
    },
    
    updateBook: async ({id, input}) => {
        try {
            const book = await Book.findByIdAndUpdate(id, input, { new: true });
            if (book) {
                return book;
            } else {
                throw new Error('no book exists with id ' + id);
            }
        } catch (err) {
            throw new Error({ message: err.message });
        }
    },

    deleteBook: async ({id}) => {
        try {
            const book = await Book.findByIdAndDelete(id);
            if (book) {
                return true;
            } else {
                throw new Error('no book exists with id ' + id);
            }
        } catch (err) {
            throw new Error({ message: err.message });
        }
    },
};

module.exports = { schema, root };