import mongoose from 'mongoose';
import { MONGO_URL } from './config';

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then((db) => console.log('Database is connected'))
    .catch((err) => console.log(err));