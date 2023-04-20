const service = require('../services/deleteFile');

const defaultErrorType = 'INTERNAL_SERVER_ERROR';

const defaultErrorMsg = 'Something went wrong. Please try again later';

exports.deleteFile = async (req, res) => {
  try {
    const file = req.query.key;
    const response = await service.deleteFile(file);
    if (response) {
      return res.status(200).json('File deleted successfully');
    }
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      error_type: error.errorType || defaultErrorType,
      error_message: error.errorMessage || defaultErrorMsg,
    });
  }
};
