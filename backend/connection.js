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


export const dropCollections = async () => {
        const collections = mongoose.connection.collections;

        for (const key in collections) {
            const collection = collections[key];
            await collection.deleteMany();
        }
};