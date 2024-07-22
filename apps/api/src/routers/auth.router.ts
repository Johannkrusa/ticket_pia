import { authenticateUser, keepAuth } from '@/controllers/authenticate.controllers';
import { validateLoginCredentials } from '@/middlewares/validateLoginCredentials.middleware';
import { verifyToken } from '@/middlewares/verifyToken.middleware';
import { Router } from 'express';
const router = Router();

router.post('/', validateLoginCredentials, authenticateUser)
router.get('/', verifyToken, keepAuth)

export default router;
