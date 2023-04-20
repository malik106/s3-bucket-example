const AWS = require('aws-sdk');
const fs = require('fs');

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

// Upload file from s3 bucket
exports.uploadToS3 = (file) => new Promise((resolve, reject) => {
  const fileStream = fs.readFileSync(file.path);

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Body: fileStream,
    Key: file.originalname,
  };

  s3.upload(params, (error, data) => {
    if (error) {
      reject(error);
    } else {
      resolve(data);
    }
  });
});

// Delete file from s3 bucket
exports.deleteFileFromS3 = async (key) => new Promise((resolve, reject) => {
  const deleteParams = {
    Key: key,
    Bucket: process.env.AWS_BUCKET_NAME,
  };
  s3.deleteObject(deleteParams, (error, data) => {
    if (error) {
      reject(error);
    } else {
      resolve(data);
    }
  });
});
