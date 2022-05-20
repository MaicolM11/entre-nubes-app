const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
require('./connection')

var app = express()

var port = process.env.PORT

// middlewares
app.use(morgan(':method :url - :referrer :status :response-time ms'));
app.use(express.static('public'))
app.use(express.json())
app.use(cors())

// test
app.get('/names', (req, res) => {
    res.json([{name: "Lola"}, {name: "Pedro"} ])
})

// routes
app.use('/product', require('./routes/product.routes') )
app.use('/auth', require('./routes/auth.routes') )


app.listen(port)