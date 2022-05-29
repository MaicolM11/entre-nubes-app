import { SECRET, EXPIRES_IN } from "../config";
import { findUserAndComparePassword } from "./user.controller"
import * as jwt from 'jsonwebtoken'

export const login = async (req, res) => {
    console.log(req.body);
    let foundUser = await findUserAndComparePassword(req, res);
    
    if(foundUser) {
        const token = jwt.sign({id: foundUser._id}, SECRET, {
            expiresIn: EXPIRES_IN
        })
        res.status(200).json( { token: token, rol: foundUser.rol});
    }

}