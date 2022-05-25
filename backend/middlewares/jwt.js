import * as jwt from 'jsonwebtoken';
import { SECRET } from '../config';
import User from '../models/User';

export const verifyToken = async (req, res, next) => {
  
    const token = req.headers['x-access-token']

    if (!token) return res.status(403).json({message: 'No token provided'})
    const decoded = jwt.verify(token, SECRET)
    req.userId = decoded.id;
    const user = await User.findById(req.userId)
    if(!user) return res.status(404).json( { message: 'User not found' } )
    next()

}