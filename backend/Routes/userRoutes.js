import express from "express"
import protectRoutes from "../Middleware/protectRoutes.js";
import { getUserForSidebar } from "../Controllers/userController.js";
 const router=express.Router();

 router.get("/",protectRoutes,getUserForSidebar)
 export default router;