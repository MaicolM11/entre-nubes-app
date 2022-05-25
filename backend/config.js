import User from "./models/User"
import Role from "./models/Role"

const createAdmin = async () => {
    let admin = await User.findOne({ rol: Role.ADMIN })
    if (!admin) {
        admin = new User({
            fullname: 'Pedro Perez',
            email: 'pedro.perez@gmail.com',
            password: await User.encryptPass('pedro123'),
            cc: '6891201',
            address: 'Cra 4 N 100',
            phone: '7621 2171 213',
            rol: Role.ADMIN
        })
        admin.save().then(doc => console.log('Admin has been created!'))
    }
}

module.exports = {
    SECRET: process.env.SECRET,
    MONGO_URL: process.env.MONGO_URL,
    EXPIRES_IN: process.env.EXPIRES_IN,
    PORT: process.env.S_PORT,
    createAdmin
}