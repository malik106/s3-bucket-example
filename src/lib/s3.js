const {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} = require('@aws-sdk/client-s3');
const fs = require('fs');

const s3 = new S3Client({
  region: process.env.AWS_BUCKET_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// Upload file from s3 bucket
exports.uploadToS3 = async (file) => {
  const fileStream = fs.readFileSync(file.path);
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Body: fileStream,
    Key: file.originalname,
  };

  const command = new PutObjectCommand(params);
  const res = await s3.send(command);
  return res;
};

// Delete file from s3 bucket
exports.deleteFileFromS3 = async (key) => {
  const deleteParams = {
    Key: key,
    Bucket: process.env.AWS_BUCKET_NAME,
  };

  const command = new DeleteObjectCommand(deleteParams);
  const res = await s3.send(command);
  return res;
};
