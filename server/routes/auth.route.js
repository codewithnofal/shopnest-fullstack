import { Router } from "express";
import { loginController, registerController, userController } from "../controllers/auth.controller.js";

const router = Router();

router.post('/register', registerController)
router.post('/login', loginController)
router.post('/user', userController)

export default router;
