
import express, { urlencoded } from 'express';
const app = express()
import router from './Routers/UserRouter.js';
import dotenv from 'dotenv'
dotenv.config()
    
import connectDB from './db.js';
const PORT = process.env.PORT || 8000
connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/users', router)

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
})