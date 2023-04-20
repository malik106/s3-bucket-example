const express = require('express');
const multer = require('multer');
const uploadFileController = require('../controllers/uploadFile');
const deleteFileController = require('../controllers/deleteFile');

const router = express.Router();

const upload = multer({ dest: 'uploads/' });

// name:  File upload
// end-point:  /upload-file
router.post(
  '/upload-file',
  upload.single('file'),
  uploadFileController.uploadFile,
);

// name:  File deleted
// end-point:  /delete-file
router.delete('/delete-file', deleteFileController.deleteFile);

module.exports = router;
