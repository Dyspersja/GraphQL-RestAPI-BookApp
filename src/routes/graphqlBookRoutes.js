var { ruruHTML } = require("ruru/server");
var { createHandler } = require('graphql-http/lib/use/express');
const schema = require('../controllers/graphqlBookController');

const handler = createHandler({ schema });

const ui = (req, res, next) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    return res.end(
        ruruHTML({
            endpoint: "/graphql",
        }),
    );
}

module.exports = { handler, ui };