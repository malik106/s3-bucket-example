const s3 = require('../utils/s3');

exports.deleteFile = async (key) => s3.deleteFileFromS3(key);
