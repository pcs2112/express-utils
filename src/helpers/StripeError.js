/**
 * Error class used to normalize Stripe API errors.
 */
class StripeError extends Error {
  /**
   * @param {Object} response - API response object
   */
  constructor(response) {
    super(response.message);
    Error.captureStackTrace(this, StripeError);
    this.name = 'StripeError';
    this.status = response.statusCode;
    this.type = response.type;
    this.response = {
      requestId: response.requestId,
      statusCode: response.statusCode,
      message: response.message,
      type: response.type,
      rawType: response.rawType,
      code: response.code,
      param: response.param,
    };
  }
}

export default StripeError;
