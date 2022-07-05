import User from "../models/User"
import { ROLES } from "../models/Enums"

const createAdmin = async () => {
    let admin = await User.findOne({ rol: ROLES.ADMIN })
    if (!admin) {
        admin = new User({
            fullname: 'admin',
            email: 'admin@gmail.com',
            password: await User.encryptPass('admin'),
            rol: ROLES.ADMIN
        })
        admin.save().then(doc => console.log('Admin has been created!'))
    }
}

const createSalesman = async () => {
    let salesman = await User.findOne({ email: "salesman@gmail.com" })
    if (!salesman) {
        salesman = new User({
            fullname: 'salesman',
            email: 'salesman@gmail.com',
            password: await User.encryptPass('salesman'),
            rol: ROLES.SALESMAN
        })
        salesman.save().then(doc => console.log('Salesman has been created!'))
    }
}

export const createUsers = () => {
    createAdmin()
    createSalesman()
}