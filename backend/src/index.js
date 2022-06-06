import { connectDB, dropCollections } from './database'
import { createAdmin, PORT } from './config'
import app from './app'

//process.env.MONGO_URL_TEST para pruebas
connectDB()
createAdmin()


app.listen(PORT)
console.log('Server is running here http://localhost:' + PORT)