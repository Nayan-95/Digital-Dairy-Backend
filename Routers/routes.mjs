import express from 'express';

import healthChecker from '../Services/healthChecker.mjs'
 
import addNewPage from '../Services/pages/addNewPage.mjs'
import getOwnPages from '../Services/pages/getOwnPages.mjs'
import getSharedPages from '../Services/pages/getSharedPages.mjs'
import createNewUser from '../Services/users/createNewUser.mjs'
import userLogin from '../Services/users/loginUser.mjs'
import uploadImage from '../Services/uploads/handleImage.mjs'
import upload from '../middleware/upload.mjs';
import getImages from '../Services/uploads/getImagesByPage.mjs';
import deleteImage from '../Services/uploads/deleteImagesByPage.mjs';
// Create an express router
const router = express.Router();

// Use individual routes
router.use('/healthChecker', healthChecker);

router.post('/addPage', addNewPage);
router.post('/addUser', createNewUser)
router.post('/userLogin',userLogin);
router.post('/api/imgUpload', upload.single('image'), uploadImage);

router.get('/getOwnPages', getOwnPages);
router.get('/getSharedPages', getSharedPages);
router.get('/api/getImages/:pageId', getImages)
router.delete('/api/deleteImage/:imageId', deleteImage);

export default router;
