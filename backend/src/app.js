import { SWAGGER_SERVE, SWAGGER_SETUP } from './middlewares/swagger.config'
import { verifyTokenToSocket } from './middlewares/jwt'
import { emitLastBills } from './controllers/bill.controller';

import { createServer } from "http";
import { Server } from "socket.io";

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()
const http = createServer(app);
const io = new Server(http, {});

global.sockets = io.sockets;

// middlewares
app.use(morgan(':method :url - :referrer :status :response-time ms'));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());

io.use(verifyTokenToSocket).on('connection', emitLastBills);

app.use('/auth', require('./routes/auth.routes'))
app.use('/api/product', require('./routes/product.routes'))
app.use('/api/user', require('./routes/user.routes'))
app.use('/api/category', require('./routes/category.routes'))
app.use('/api/bill', require('./routes/bill.routes'))

app.use('/api-doc', SWAGGER_SERVE, SWAGGER_SETUP);

export default http;