import { SWAGGER_SERVE, SWAGGER_SETUP } from './configs/swagger.config';
import { verifyTokenToSocket } from './middlewares/jwt';
import { emitLastBills } from './controllers/bill.controller';

import { createServer } from "http";
import { Server } from "socket.io";
import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import { notify } from './controllers/notification.controller';

const app = express()
const http = createServer(app);
const io = new Server(http, { cors: { origin: '*' }});

const fs = require('fs')
const path = require('path');

global.sockets = io.sockets;

// middlewares
app.use(morgan(':method\t:url\t:referrer\t:body\t:status\t:response-time ms', {
    stream: fs.createWriteStream('./info.log', {flags: 'a'}),
    skip: (req, res) => req.method === "GET"
}));

morgan.token('body', (req, res) => JSON.stringify(req.body));

app.use(express.static(path.join(__dirname, '../build')))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());


io.use(verifyTokenToSocket).on('connection', (socket) => {
    emitLastBills(socket);
    notify(socket);
});

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/product', require('./routes/product.routes'))
app.use('/api/user', require('./routes/user.routes'))
app.use('/api/category', require('./routes/category.routes'))
app.use('/api/bill', require('./routes/bill.routes'))
app.use('/api/debtor', require('./routes/debtor.routes'))
app.use('/api/bolirana', require('./routes/bolirana.routes'))
app.use('/api/notification', require('./routes/notification.routes'))
app.use('/api/desk', require('./routes/desk.routes'))
app.use('/api/report', require('./routes/report.routes'))

app.use('/api-doc', SWAGGER_SERVE, SWAGGER_SETUP);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build', 'index.html'))
});

export default http;