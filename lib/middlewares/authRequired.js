'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authRequired = undefined;

var _CustomError = require('../helpers/CustomError');

var _CustomError2 = _interopRequireDefault(_CustomError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var authRequired = exports.authRequired = function authRequired(req, res, next) {
  if (!req.isAuthenticated || !req.isAuthenticated()) {
    return next(new _CustomError2.default(401, 'Login required.'));
  }

  return next();
}; /**
    * Middleware used to prevent unauthenticated users to access a route.
    */