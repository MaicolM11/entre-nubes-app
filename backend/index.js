const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
import { setUp } from './connection'

setUp()

var app = express()

var port = process.env.S_PORT

// middlewares
app.use(morgan(':method :url - :referrer :status :response-time ms'));
app.use(express.static('public'))
app.use(express.json())
app.use(cors())

// test
app.get('/msg', (req, res) => res.json({ msg: "API works"}))

// routes
app.use('/product', require('./routes/product.routes') )
app.use('/auth', require('./routes/auth.routes') )
app.use('/salesman', require('./routes/user.routes') )
app.use('/category', require('./routes/category.routes') )

app.listen(port, () => console.log('Server is running here http://localhost:' + port))