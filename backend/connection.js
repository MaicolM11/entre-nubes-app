const mongoose = require('mongoose');

const uri = process.env.MONGO_URL

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then((db) => console.log(`Database is connected`))
    .catch((err) => console.log(err));