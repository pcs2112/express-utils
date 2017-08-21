/**
 * Error class used to normalize Sendgrid API errors.
 */
class SendgridError extends Error {
  /**
   * @param {Object} response - API error response object
   */
  constructor(response) {
    super(response.message);
    Error.captureStackTrace(this, SendgridError);
    this.name = 'SendgridError';
    this.status = response.response.statusCode;
    this.response = response.response.body;
  }
}

export default SendgridError;
