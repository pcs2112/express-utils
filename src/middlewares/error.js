import { CustomError } from '../errors';

/**
 Middleware to handle middleware errors
 */
export default (err, req, res, next) => { // eslint-disable-line no-unused-vars
  if (err) {
    console.error(err);
  }

  let status = 500;
  const error = {};

  if (err.name === 'SequelizeValidationError') {
    status = 400;
    const customError = new CustomError(400, 'Validation error.', err);
    error.message = customError.message;
    error.errors = customError.errors;
  } else if (err.name === 'CustomError' && err.errors) {
    status = 400;
    error.message = err.message;
    error.errors = err.errors;
  } else {
    status = err.status || 500;
    error.message = err.message;
  }

  res.status(status);
  res.json(error);
};
