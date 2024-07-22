import { Router } from 'express';
const router = Router();
import authRouter from './auth.router'
import registerRouter from './register.router'

router.use('/auth',  authRouter);
router.use('/register', registerRouter)

export default router;
