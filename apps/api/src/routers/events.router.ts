import { Router } from 'express';
import { uploader } from '@/middlewares/uploader.middleware';
import { verifyToken } from '@/middlewares/verifyToken.middleware';
import { createEvents, getEvent } from '@/controllers/events.controller';

const router = Router();

const upload = uploader(
  'IMG', // File prefix
  'event-images', // Folder name
  ['jpg', 'jpeg', 'png'], // Accepted file types
  5 * 1024 * 1024, // File size limit (5 MB)
);

router.post(
  '/',
  verifyToken, // Add the verifyToken middleware here
  upload.fields([
    { name: 'event_main_picture', maxCount: 1 },
    { name: 'event_other_pictures', maxCount: 10 },
  ]),
  createEvents
);
router.get('/', getEvent)

export default router;
