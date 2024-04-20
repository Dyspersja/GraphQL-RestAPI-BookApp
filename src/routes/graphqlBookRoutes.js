var { ruruHTML } = require("ruru/server");
var { createHandler } = require('graphql-http/lib/use/express');
const bookController = require('../controllers/graphqlBookController');

const router = createHandler({
    schema: bookController.schema,
    rootValue: bookController.root,
    });

const ui = (req, res, next) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        return res.end(
            ruruHTML({
                endpoint: "/graphql",
            }),
        );
    }

module.exports = { router, ui };