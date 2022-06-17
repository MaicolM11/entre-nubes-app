import { connectDB } from './database'
import { createUsers } from './configs/users.config'
import { PORT } from './configs/env.config'

import app from './app'

//process.env.MONGO_URL_TEST para pruebas
connectDB()
createUsers()

app.listen(PORT)
console.log('Server is running here http://localhost:' + PORT)