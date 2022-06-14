import { connectDB, dropCollections} from '../src/database'
import User from '../src/models/User'
import app from '../src/app'
import {ROLES} from '../src/models/Enums'

import request from 'supertest'

export const admin = { fullname: 'admin', email: 'admin@gmail.com', password: '1234', rol: ROLES.ADMIN };
export const salesman = { fullname: 'salesman',email: 'salesman@gmail.com', password: '1234' };

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

export const PRODUCT_URL = '/api/product/';
export const CATEGORY_URL = '/api/category/';
export const BILL_URL = '/api/bill/';
export const USER_URL = '/api/user/';
