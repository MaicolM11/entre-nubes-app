import { SECRET, EXPIRES_IN } from "../config";
import { createUser, findUser } from "./user.controller"
import * as jwt from 'jsonwebtoken'

export const register = async (req, res) => {
    const savedUser = await createUser(req, res);

    const token = jwt.sign({id: savedUser._id}, SECRET, {
        expiresIn: EXPIRES_IN
    })

    res.status(201).json(token);
}

export const login = async (req, res) => {

    let foundUser = await findUser(req, res);
    
    if(foundUser) {
        const token = jwt.sign({id: foundUser._id}, SECRET, {
            expiresIn: EXPIRES_IN
        })
        res.status(200).json( { token: token, rol: foundUser.rol});
    }

}