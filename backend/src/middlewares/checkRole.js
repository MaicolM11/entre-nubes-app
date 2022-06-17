import { ROLES } from "../models/Enums";

export const isSalesman = async (req, res, next) => {
   
    if(req.user.rol == ROLES.SALESMAN) {
        next()
        return;
    }

    res.status(401).json({ message: 'Salesman rol is required' })
}

export const isAdmin = async (req, res, next) => {

    if(req.user.rol == ROLES.ADMIN ) {
        next()
        return;
    }

    res.status(401).json({ message: 'Admin rol is required' })
}   

export const hasAnyRol = async (req, res, next) => {

    if(req.user.rol == ROLES.SALESMAN || user.rol == ROLES.ADMIN) {
        next()
        return;
    }

    res.status(401).json({ message: 'Salesman or Admin rol is required' })
}