const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const restApiBookRoutes = require('./routes/restApiBookRoutes');
const graphqlBookRoutes = require('./routes/graphqlBookRoutes');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger-api.json');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/books', restApiBookRoutes);
app.use('/graphql/ui', graphqlBookRoutes.ui);
app.use('/graphql', graphqlBookRoutes.handler);

const server = http.createServer(app);
const port = 8000;
server.listen(port);
console.debug('Server listening on port ' + port);