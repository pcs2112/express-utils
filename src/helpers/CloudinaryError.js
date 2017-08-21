/**
 * Error class used to normalized Cloudinary API errors.
 */
class CloudinaryError extends Error {
  /**
   * @param {Object} response - Cloudinary response object
   */
  constructor(response) {
    super(response.error.message);
    Error.captureStackTrace(this, CloudinaryError);
    this.name = 'CloudinaryError';
    this.status = response.error.http_code;
    this.response = response.error;
  }
}

export default CloudinaryError;
