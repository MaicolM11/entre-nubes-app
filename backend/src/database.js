import mongoose from 'mongoose';
import { MONGO_URL } from './config';

export const connectDB = async (URL = MONGO_URL) => {
    await mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
};

export const dropCollections = async () => {
        const collections = mongoose.connection.collections;

        for (const key in collections) {
            const collection = collections[key];
            await collection.deleteMany();
        }
};

export const disconnectDB = async () => {
    await mongoose.connection.close();
}