var { graphqlHTTP } = require('express-graphql');
const bookController = require('../controllers/graphqlBookController');

const router = graphqlHTTP({
    schema: bookController.schema,
    rootValue: bookController.root,
    graphiql: true,
    });

module.exports = router;