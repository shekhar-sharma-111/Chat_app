
const router = express.Router()
import express from 'express'
import {login,signup,logout, getuser} from '../Controllers/authController.js'
import verifyToken from '../Middleware/verifyToken.js'

router.post('/api/auth/signup',signup)
router.post('/api/auth/login',login)
router.post('/api/auth/logout',logout)
router.get('/api/auth/getuser',verifyToken,getuser)
export default router;