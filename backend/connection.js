import mongoose from 'mongoose';
import { MONGO_URL } from './config';

export const setUp = async () => {
    await mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
};

export const dropDatabase = async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
};