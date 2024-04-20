const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'Description'
  },
  host: 'localhost:8000'
};

const outputFile = '../swagger-api.json';
const endpointFiles = ['./app.js'];

swaggerAutogen(outputFile, endpointFiles, doc);