import * as jwt from 'jsonwebtoken';
import { SECRET } from '../config';
import User from '../models/User';

export const verifyToken = async (req, res, next) => {
    try {
        if (!req.headers.authorization) return res.status(403).json({ message: 'No token provided' })
        const token = req.headers.authorization.replace('Bearer ', '')
        const decoded = jwt.verify(token, SECRET)
        req.userId = decoded.id;
        const user = await User.findById(req.userId)
        if (!user) return res.status(404).json({ message: 'User not found' })
        next()
    } catch (err) {
        res.status(400).json({ message: err.message })
    }

}