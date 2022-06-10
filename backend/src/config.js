import User from "./models/User"
import {ROLES} from "./models/Enums"

const createAdmin = async () => {
    let admin = await User.findOne({ rol: ROLES.ADMIN })
    if (!admin) {
        admin = new User({
            fullname: 'admin',
            email: 'admin@gmail.com',
            password: await User.encryptPass('1234'),
            cc: '6891201',
            address: 'Cra 4 N 100',
            phone: '7621 2171 213',
            rol: ROLES.ADMIN
        })
        admin.save().then(doc => console.log('Admin has been created!'))
    }
    createSalesman()
}

const createSalesman = async () => {
    let admin = await User.findOne({ email: "salesman@gmail.com" })
    if (!admin) {
        admin = new User({
            fullname: 'salesman',
            email: 'salesman@gmail.com',
            password: await User.encryptPass('1234'),
            cc: '6891201',
            address: 'Cra 4 N 100',
            phone: '7621 2171 213',
            rol: ROLES.SALESMAN
        })
        admin.save().then(doc => console.log('salesman has been created!'))
    }
}

module.exports = {
    SECRET: process.env.SECRET,
    MONGO_URL: process.env.MONGO_URL,
    EXPIRES_IN: process.env.EXPIRES_IN,
    PORT: process.env.S_PORT,
    createAdmin
}