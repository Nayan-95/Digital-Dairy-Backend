import express from 'express';

import healthChecker from '../Services/healthChecker.mjs'

import addPage from '../Services/addPage.mjs'
import getOwnPages from '../Services/getOwnPages.mjs'
import getSharedPages from '../Services/getSharedPages.mjs'

// Create an express router
const router = express.Router();

// Use individual routes
router.use('/healthChecker', healthChecker);

router.post('/addPage', addPage);

router.get('/getOwnPages/:userId', getOwnPages);
router.get('/getSharedPages/:userId', getSharedPages);

export default router;
