import express from 'express';
const router = express.Router();
import { ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node';

import { usersync, userbookmarks, userstats, userfollowing } from '../controllers/userController.js';

// router.get('/:emailid', requireAuth(), user);

router.post('/sync', ClerkExpressRequireAuth(),  usersync);

router.get('/library', ClerkExpressRequireAuth(), userbookmarks);

router.get('/stats', ClerkExpressRequireAuth(), userstats);

router.get('/following', ClerkExpressRequireAuth(), userfollowing);

export default router;
