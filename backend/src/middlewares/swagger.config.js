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
        components: {
            schemas: {
                
                Login: {
                    type: "object",
                    properties: {
                        email: { type: "string" },
                        password: { type: "string" }
                    }
                },

                Category: {
                    type: "object",
                    properties: {
                        name: { type: "string" }
                    },
                    example: { name: "Bebidas" }
                },

                Product: {
                    type: "object",
                    properties: {
                        brand: { type: "string" },
                        category: { type: "string" },
                        buy_price: { type: "number" },
                        sale_price: { type: "number" },
                        presentation: { type: "string" },
                        stock: { type: "integer" },
                        img_url: { type: "string" },
                    }
                },

                User : {
                    type: "object",
                    properties: {
                        fullname: { type : "string" },
                        email: { type : "string" },
                        password: { type : "string" },
                        cc: { type : "string" },
                        address: { type : "string" },
                        phone: { type : "string" },
                        rol: { type: "string" }
                    }
                }
            },
            securitySchemes: {
                jwt: {
                  type: "http",
                  scheme: "bearer",
                  in: "header",
                  bearerFormat: "JWT"
                },
            }
        },
        security: [{
            jwt: []
        }],

    },
    apis: [`${path.join(__dirname, '/../routes/*.js')}`],
}

export const SWAGGER_SERVE = swaggerUi.serve;

export const SWAGGER_SETUP = swaggerUi.setup(swaggerJsDoc(swaggerSpec));