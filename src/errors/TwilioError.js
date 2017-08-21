/**
 * Error class used to normalize Twilio API errors.
 */

/**
 * Resolves a user friendly message based on the specified API error code.
 * @param {Number} code
 * @returns {String}
 */
const getMessage = (code) => {
  let message = null;
  switch (code) {
    case 21606:
      message = 'A valid Twilio number is required. Please contact support if the problem persists.';
      break;
    case 21211:
    case 21217:
    case 21401:
    case 21407:
    case 21421:
    case 21601:
    case 21604:
      message = 'A valid number is required.';
      break;
    default:
      message = 'Internal error. Please contact support if the problem persists.';
  }

  return message;
};

class TwilioError extends Error {
  /**
   * @param {Object} response - API error response object
   */
  constructor(response) {
    super(getMessage(response.code));
    Error.captureStackTrace(this, TwilioError);
    this.name = 'TwilioError';
    this.status = response.status;
    this.response = {
      status: response.status,
      message: response.message,
      moreInfo: response.moreInfo,
      detail: response.detail,
      code: response.code
    };
  }
}

export default TwilioError;
