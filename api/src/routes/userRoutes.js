import express from 'express';
const router = express.Router();
import { ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node';

import { usersync, userbookmarks, userprofile, userfollowing } from '../controllers/userController.js';

// router.get('/:emailid', requireAuth(), user);

// router.post('/signup', usersignup);

router.post('/sync', ClerkExpressRequireAuth(),  usersync);

router.get('/library', ClerkExpressRequireAuth(), userlibrary);

router.get('/profile', ClerkExpressRequireAuth(), userprofile);

router.get('/following', ClerkExpressRequireAuth(), userfollowing);

export default router;
