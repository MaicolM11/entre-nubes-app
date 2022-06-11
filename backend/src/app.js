const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
import { SWAGGER_SERVE, SWAGGER_SETUP } from './middlewares/swagger.config'

var app = express()
var http = require('http').createServer(app);
const io = require('socket.io')(http);

global.socket = io.sockets


// middlewares
app.use(morgan(':method :url - :referrer :status :response-time ms'));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());

// routes
app.get('/msg', (req, res) => res.json({ msg: "API works" })) // test
app.use('/api-doc', SWAGGER_SERVE, SWAGGER_SETUP);
app.use('/auth', require('./routes/auth.routes'))

app.use('/api/product', require('./routes/product.routes'))
app.use('/api/user', require('./routes/user.routes'))
app.use('/api/category', require('./routes/category.routes'))

export default http;