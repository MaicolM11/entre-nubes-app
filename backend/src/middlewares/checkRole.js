import User from "../models/User";
import { ROLES } from "../models/Enums";

export const isSalesman = async (req, res, next) => {
    const user = await User.findById(req.userId)

    if(user.rol == ROLES.SALESMAN) {
        next()
        return;
    }

    res.status(401).json({ message: 'Salesman rol is required' })
}

export const isAdmin = async (req, res, next) => {
    const user = await User.findById(req.userId)

    if(user.rol == ROLES.ADMIN ) {
        next()
        return;
    }

    res.status(401).json({ message: 'Admin rol is required' })
}   