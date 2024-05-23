import express from 'express'
const router = express.Router()
import { userRegister,userLogin
 } from '../Controllers/userControllers.js'

router.get('/login', userLogin)
router.get('/register',userRegister)

export default router