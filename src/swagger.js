const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'Description'
  },
  host: 'localhost:8000'
};

const outputFile = '../swagger-api.json';
const endpointFiles = ['./routes/restApiBookRoutes'];

swaggerAutogen(outputFile, endpointFiles, doc);