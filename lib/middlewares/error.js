"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _errors = require("../errors");

/**
 Middleware to handle middleware errors
 */
var _default = function _default(err, req, res, next) {
  // eslint-disable-line no-unused-vars
  if (err) {
    console.error(err);
  }

  var status = 500;
  var error = {};

  if (err.name === 'SequelizeValidationError') {
    status = 400;
    var customError = new _errors.CustomError(400, 'Validation error.', err);
    error.message = customError.message;
    error.errors = customError.errors;
  } else if (err.name === 'CustomError' && err.errors) {
    status = 400;
    error.message = err.message;
    error.errors = err.errors;
  } else {
    status = err.status || 500;
    error.message = err.message;
  } // Set the response status code


  res.status(status);
  error.status = status; // Send the json payload

  res.json(error);
};

exports.default = _default;
module.exports = exports.default;