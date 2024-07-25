import { registerOrganizer, registerUser } from '@/controllers/register.controller';
import { validateRegisterOrganizer } from '@/middlewares/validateRegisterOrganizer.middleware';
import { validateRegisterUser } from '@/middlewares/validateRegisterUser.middleware';
import { Router } from 'express';
const router = Router();

router.post('/user', validateRegisterUser, registerUser )
router.post('/organizer', validateRegisterOrganizer, registerOrganizer)

export default router;
