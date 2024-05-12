const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const restApiBookRoutes = require('./routes/restApiBookRoutes');
const graphqlBookRoutes = require('./routes/graphqlBookRoutes');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger-api.json');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/', restApiBookRoutes);
app.get('/graphql', graphqlBookRoutes.ui);
app.use('/graphql', graphqlBookRoutes.handler);

const server = http.createServer(app);
const port = 8000;
server.listen(port);
console.debug('Server listening on port ' + port);