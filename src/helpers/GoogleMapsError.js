/**
 * Error class used to normalized Google Maps API errors.
 */
class GoogleMapsError extends Error {
  /**
   * @param {String} message - Error message
   * @param {Number} code
   * @param {Object} response - API error response object
   */
  constructor(message, code, response) {
    super(message);
    Error.captureStackTrace(this, GoogleMapsError);
    this.name = 'GoogleMapsError';
    this.status = code;
    this.response = response;
  }
}

export default GoogleMapsError;
