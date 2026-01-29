import express from 'express';
const router = express.Router();
import { ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node';

import { createcontent } from '../controllers/contentController.js';
import upload from '../middlewares/multerAuth.js';

router.post(
  '/create',
  ClerkExpressRequireAuth(),
  upload.fields([
    { name: 'thumbnail', maxcount: 1 },
    { name: 'contentimage', maxcount: 1 },
  ]),
  createcontent,
);

export default router;
