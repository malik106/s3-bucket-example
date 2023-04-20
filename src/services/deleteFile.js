const s3 = require('../lib/s3');

exports.deleteFile = (key) => s3.deleteFileFromS3(key);
