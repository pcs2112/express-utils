"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _errors = require("../errors");

/**
 * Middleware used to prevent unauthenticated users to access a route.
 */
var _default = function _default(req, res, next) {
  if (!req.isAuthenticated || !req.isAuthenticated()) {
    return next(new _errors.CustomError(401, 'Login required.'));
  }

  return next();
};

exports.default = _default;
module.exports = exports.default;