'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _number = require('javascript-utils/lib/number');

var _errors = require('../errors');

/**
 * Normalizes the list of query params to integers.
 *
 * @param {Array} queryParams
 * @param {String} type - Allowed types are "query" or "param"
 */
exports.default = function () {
  var queryParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'query';
  return function (req, res, next) {
    var invalidParams = [];
    queryParams.forEach(function (queryParam) {
      if (Object.prototype.hasOwnProperty.call(req[type], queryParam) && (0, _number.isNumber)(req[type][queryParam])) {
        req[type][queryParam] = (0, _number.normalizeInputToInteger)(req[type][queryParam]);
      } else {
        invalidParams.push(queryParam);
      }
    });

    if (invalidParams.length > 0) {
      return next(new _errors.CustomError(400, '"' + invalidParams.join(', ') + '" must be set to valid numbers.'));
    }

    return next();
  };
};

module.exports = exports['default'];