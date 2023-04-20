const s3 = require('../lib/s3');

exports.uploadFile = (file) => s3.uploadToS3(file);
exports.deleteFile = (key) => s3.deleteFileFromS3(key);
