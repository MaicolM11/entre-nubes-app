const path = require('path')
const swaggerUi = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')

const swaggerSpec = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Entre nubes bar app API',
            version: '1.0.0',
        },
        servers: [{
            url: `http://localhost:8000`
        }],
       

    },
    apis: [`${path.join(__dirname, '/../routes/*.js')}`],
}

export const SWAGGER_SERVE = swaggerUi.serve;

export const SWAGGER_SETUP = swaggerUi.setup(swaggerJsDoc(swaggerSpec));