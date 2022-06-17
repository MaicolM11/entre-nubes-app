import * as jwt from 'jsonwebtoken';
import { SECRET } from '../configs/env.config';
import User from '../models/User';

export const verifyToken = async (req, res, next) => {
    try {
        if (!req.headers.authorization) return res.status(403).json({ message: 'No token provided' })
        const token = req.headers.authorization.replace('Bearer ', '')
        const decoded = jwt.verify(token, SECRET)
        const user = await User.findById(decoded.id)
        if (!user) return res.status(404).json({ message: 'User not found' })
        req.user = user;
        next()
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

export const verifyTokenToSocket = (socket, next) => {
    try {
        if (socket.handshake.query.token) {
            const token = socket.handshake.query.token.replace('Bearer ', '')
            const decoded = jwt.verify(token, SECRET);
            socket.decoded = decoded;
            next();   
            return;
        }
    } catch (error) { }
    next(new Error('Authentication error'));
}