import { authenticateUser, emailVerification, keepAuth, sendEmailVerification } from '@/controllers/authenticate.controllers';
import { validateLoginCredentials } from '@/middlewares/validateLoginCredentials.middleware';
import { verifyToken } from '@/middlewares/verifyToken.middleware';
import { Router } from 'express';
const router = Router();

router.post('/', validateLoginCredentials, authenticateUser)
router.get('/', verifyToken, keepAuth)
router.post('/email/verify', verifyToken, emailVerification)
router.get('/email/verify', verifyToken, sendEmailVerification)

export default router;
