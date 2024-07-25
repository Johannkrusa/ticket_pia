import { Router } from 'express';
const router = Router();
import authRouter from './auth.router'
import registerRouter from './register.router'
import genresRouter from './genres.router'
import regionsRouter from './regions.router'

router.use('/auth', authRouter);
router.use('/register', registerRouter);
router.use('/regions', regionsRouter);
router.use('/genres', genresRouter)

export default router;
