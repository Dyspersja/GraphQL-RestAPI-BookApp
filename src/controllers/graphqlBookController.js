const BooksDB = require('../database');
var { 
    GraphQLSchema, 
    GraphQLObjectType, 
    GraphQLInputObjectType, 
    GraphQLID, 
    GraphQLString, 
    GraphQLNonNull,
    GraphQLList,
    GraphQLBoolean
} = require('graphql');

const BookInputType = new GraphQLInputObjectType({
    name: 'BookInput',
    fields: {
        title: { type: GraphQLString },
        author: { type: GraphQLString }
    }
});

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: {
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        author: { type: GraphQLString }
    }
});

const QueryResolvers = {
    getBook: async (parent, {id}) => {
        const book = await BooksDB.getBookById(id);
        if (book) {
            return book;
        } else {
            throw new Error('no book exists with id ' + id);
        }
    },

    getBooks: async (parent, args) => {
        const books = await BooksDB.getAllBooks();
        return books;
    }
};

const MutationResolvers = {
    createBook: async (parent, {input}) => {
        try {
            const newBook = await BooksDB.createBook(input);
            return newBook;
        } catch (err) {
            throw new Error({ message: err.message });
        }
    },
    
    updateBook: async (parent, {id, input}) => {
        try {
            const book = await BooksDB.updateBook(id, input);
            if (book) {
                return book;
            } else {
                throw new Error('no book exists with id ' + id);
            }
        } catch (err) {
            throw new Error({ message: err.message });
        }
    },

    deleteBook: async (parent, {id}) => {
        try {
            const book = await BooksDB.deleteBook(id);
            if (book) {
                return true;
            } else {
                throw new Error('no book exists with id ' + id);
            }
        } catch (err) {
            throw new Error({ message: err.message });
        }
    }
};

const QueryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        getBook: {
            type: BookType,
            args: { id: { type: new GraphQLNonNull(GraphQLID) } },
            resolve: QueryResolvers.getBook
        },
        getBooks: {
            type: new GraphQLList(BookType),
            resolve: QueryResolvers.getBooks
        }
    }
});

const MutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createBook: {
            type: BookType,
            args: { input: { type: BookInputType } },
            resolve: MutationResolvers.createBook
        },
        updateBook: {
            type: BookType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
                input: { type: BookInputType }
            },
            resolve: MutationResolvers.updateBook
        },
        deleteBook: {
            type: GraphQLBoolean,
            args: { id: { type: new GraphQLNonNull(GraphQLID) } },
            resolve: MutationResolvers.deleteBook
        }
    }
});

const schema = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType
});

module.exports = schema;