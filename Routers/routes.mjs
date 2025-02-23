import express from 'express';

import healthChecker from '../Services/healthChecker.mjs'
 
import addNewPage from '../Services/pages/addNewPage.mjs'
import getOwnPages from '../Services/pages/getOwnPages.mjs'
import getSharedPages from '../Services/pages/getSharedPages.mjs'
import createNewUser from '../Services/users/createNewUser.mjs'
import userLogin from '../Services/users/loginUser.mjs'
// Create an express router
const router = express.Router();

// Use individual routes
router.use('/healthChecker', healthChecker);

router.post('/addPage', addNewPage);
router.post('/addUser', createNewUser)
router.post('/userLogin',userLogin);

router.get('/getOwnPages', getOwnPages);
router.get('/getSharedPages', getSharedPages);

export default router;
