import { connectDB, dropCollections} from '../../database'
import User from '../../models/User'
import app from '../../app'
import request from 'supertest'
import Role from '../../models/Role'

export const admin = { fullname: 'admin', email: 'admin@gmail.com', password: '1234', rol: Role.ADMIN };
export const salesman = { email: 'salesman@gmail.com', password: '1234' };

export const createUser = async (data) => {
    let user = {...data}
    user.password = await User.encryptPass(data.password);
    const newUser = new User(user);
    await newUser.save();
}

beforeAll(async () => {
    await connectDB(process.env.MONGO_URL_TEST)
    await createUser(admin);
    await createUser(salesman);
});

afterAll(async () => await dropCollections());

export const API = request(app);


export const login = async (credentials) => {
    return await API.post('/auth/login').send(credentials);
}
