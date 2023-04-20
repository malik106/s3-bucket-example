const express = require('express');
const multer = require('multer');
const attachmentController = require('../controllers/attachment');

const router = express.Router();

const upload = multer({ dest: 'uploads/' });

// name:  File upload
// end-point:  /upload-file
router.post(
  '/attachment',
  upload.single('file'),
  attachmentController.uploadFile,
);

// name:  File deleted
// end-point:  /delete-file
router.delete('/attachment', attachmentController.deleteFile);

module.exports = router;
