import { connectDB, dropCollections } from './database'
import { createAdmin, PORT } from './config'
import app from './app'

connectDB()
createAdmin()


app.listen(PORT)
console.log('Server is running here http://localhost:' + PORT)