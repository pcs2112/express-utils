'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CustomError = require('../helpers/CustomError');

var _CustomError2 = _interopRequireDefault(_CustomError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 Middleware to handle middleware errors
 */
exports.default = function (err, req, res, next) {
  // eslint-disable-line no-unused-vars
  if (err) {
    console.error(err);
  }

  var status = 500;
  var error = {};

  if (err.name === 'SequelizeValidationError') {
    status = 400;
    var customError = new _CustomError2.default(400, 'Validation error.', err);
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

module.exports = exports['default'];