/**
 * Custom error class used to normalize application response error.
 */
class CustomError extends Error {
  status = 500;
  errors = null;

  /**
   *
   * @param {Number} status
   * @param {String} msg
   * @param {Object|undefined} errors
   */
  constructor(status, msg, errors) {
    super(msg);
    Error.captureStackTrace(this, CustomError);
    this.name = 'CustomError';
    this.status = status;

    if (errors && errors.errors) {
      this.errors = {};
      errors.errors.forEach((error) => {
        this.errors[error.path] = error.message;
      });
    }
  }
}

export default CustomError;
