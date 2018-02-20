'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _errors = require('../errors');

exports.default = function (userTypesAllowed) {
  var userPropertyName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'user';
  var userTypePropertyName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'userTypeId';
  return function (req, res, next) {
    if (!req.isAuthenticated() || !Array.isArray(userTypesAllowed) || !req[userTypesAllowed] || !req[userTypesAllowed][userTypePropertyName] || userTypesAllowed.indexOf(req[userPropertyName][userTypePropertyName]) < 0) {
      return next(new _errors.CustomError(403, 'Access denied.'));
    }

    return next();
  };
};

module.exports = exports['default'];