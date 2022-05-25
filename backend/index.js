const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
import { connectDB } from './connection'
import { SWAGGER_SERVE, SWAGGER_SETUP } from './middlewares/swagger.config'
import { createAdmin, PORT } from './config'

connectDB()
createAdmin()

var app = express()

// middlewares
app.use(morgan(':method :url - :referrer :status :response-time ms'));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());

// test
app.get('/msg', (req, res) => res.json({ msg: "API works" }))

// routes
app.use('/api-doc', SWAGGER_SERVE, SWAGGER_SETUP);
app.use('/product', require('./routes/product.routes'))
app.use('/auth', require('./routes/auth.routes'))
app.use('/salesman', require('./routes/user.routes'))
app.use('/category', require('./routes/category.routes'))

app.listen(PORT, () => console.log('Server is running here http://localhost:' + PORT))