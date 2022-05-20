import User from "../models/User";
import Role from "../models/Role";

export const isSalesman = async (req, res, next) => {
    const user = await User.findById(req.userId)

    if(user.rol == Role.SALESMAN) {
        next()
        return;
    }

    res.status(401).json({message: 'Salesman rol is required'})
}

export const isAdmin = async (req, res, next) => {
    const user = await User.findById(req.userId)

    if(user.rol == Role.ADMIN ) {
        next()
        return;
    }

    res.status(401).json({message: 'Admin rol is required'})
}   