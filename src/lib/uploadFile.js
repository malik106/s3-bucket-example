const s3 = require('../utils/s3');

exports.uploadFile = (file) => s3.uploadToS3(file);
