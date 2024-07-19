import express from 'express'
import { getMessage, sendMessage } from '../Controllers/messageController.js';
import protectRoutes from '../Middleware/protectRoute.js';
const router =express.Router();

router.post('/send/:id',protectRoutes,sendMessage)
router.get('/:id',protectRoutes,getMessage)
export default router;