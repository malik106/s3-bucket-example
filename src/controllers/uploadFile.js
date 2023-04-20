const service = require('../services/uploadFile');

const defaultErrorType = 'INTERNAL_SERVER_ERROR';

const defaultErrorMsg = 'Something went wrong. Please try again later';

exports.uploadFile = async (req, res) => {
  try {
    const { file } = req;
    const response = await service.uploadFile(file);
    if (response) return res.status(200).json({ msg: 'File uploaded successfully' });
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      error_type: error.errorType || defaultErrorType,
      error_message: error.errorMessage || defaultErrorMsg,
    });
  }
};
