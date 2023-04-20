const attachmentService = require('../services/attachment');

const defaultErrorType = 'INTERNAL_SERVER_ERROR';

const defaultErrorMsg = 'Something went wrong. Please try again later';

exports.uploadFile = async (req, res) => {
  try {
    const { file } = req;
    const response = await attachmentService.uploadFile(file);
    if (response) return res.status(200).json({ msg: 'File uploaded successfully' });
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      error_type: error.errorType || defaultErrorType,
      error_message: error.errorMessage || defaultErrorMsg,
    });
  }
};

exports.deleteFile = async (req, res) => {
  try {
    const file = req.query.key;
    const response = await attachmentService.deleteFile(file);
    if (response) {
      return res.status(200).json({ msg: 'File deleted successfully' });
    }
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      error_type: error.errorType || defaultErrorType,
      error_message: error.errorMessage || defaultErrorMsg,
    });
  }
};
