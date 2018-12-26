"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _errors = require("../errors");

var _default = function _default(userTypesAllowed) {
  var userPropertyName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'user';
  var userTypePropertyName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'userTypeId';
  return function (req, res, next) {
    if (!req.isAuthenticated() || !Array.isArray(userTypesAllowed) || !req[userPropertyName] || !req[userPropertyName][userTypePropertyName] || userTypesAllowed.indexOf(req[userPropertyName][userTypePropertyName]) < 0) {
      return next(new _errors.CustomError(403, 'Access denied.'));
    }

    return next();
  };
};

exports.default = _default;
module.exports = exports.default;