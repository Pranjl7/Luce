import express from 'express';
const router = express.Router();

import { fetchcontent, fetchcontentpage } from '../controllers/publicController.js';

router.get('/content', fetchcontent);

router.get('/:useremailid/:contenttitle', fetchcontentpage)

export default router;
