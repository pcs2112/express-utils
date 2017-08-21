'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _errors = require('../errors');

exports.default = function (req, res, next) {
  if (!req.isAuthenticated || !req.isAuthenticated()) {
    return next(new _errors.CustomError(401, 'Login required.'));
  }

  return next();
}; /**
    * Middleware used to prevent unauthenticated users to access a route.
    */


module.exports = exports['default'];