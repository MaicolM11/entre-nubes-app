const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
import { setUp } from './connection'
const path = require('path')

const swaggerUi = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')

setUp()

var app = express()

var port = process.env.S_PORT


const swaggerSpec =  {
    swaggerDefinition:{
        openapi: '3.0.0',
        info:{
            title: 'Entre nubes bar app API',
            version: '1.0.0',
            
        },
        servers:[{
            url: `http://localhost:8000` 
         }]
    },
    apis: [`${path.join(__dirname,'./routes/*.js')}`],
}


// middlewares
app.use(morgan(':method :url - :referrer :status :response-time ms'));
app.use(express.static('public'))
app.use(express.json())
app.use(cors())

app.use('/api-doc',swaggerUi.serve, swaggerUi.setup(swaggerJsDoc(swaggerSpec)))

// test
app.get('/msg', (req, res) => res.json({ msg: "API works"}))

// routes
app.use('/product', require('./routes/product.routes') )
app.use('/auth', require('./routes/auth.routes') )
app.use('/salesman', require('./routes/user.routes') )
app.use('/category', require('./routes/category.routes') )

app.listen(port, () => console.log('Server is running here http://localhost:' + port))