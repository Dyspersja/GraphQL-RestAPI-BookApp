const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/restApiBookRoutes');
const graphqlRoutes = require('./routes/graphqlBookRoutes');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const booksDB = 'mongodb://localhost/books_db';
mongoose.connect(booksDB, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/', bookRoutes);
app.use('/graphql', graphqlRoutes);

const server = http.createServer(app);
const port = 8000;
server.listen(port);
console.debug('Server listening on port ' + port);