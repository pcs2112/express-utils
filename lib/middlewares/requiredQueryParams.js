'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _errors = require('../errors');

var _utils = require('javascript-utils/lib/utils');

/**
 * Verifies the list of specified query params
 * have been set.
 *
 * @param {Array} queryParams
 * @param {String} type - Allowed types are "query" or "param"
 */
exports.default = function () {
  var queryParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'query';
  return function (req, res, next) {
    var missingParams = [];
    queryParams.forEach(function (queryParam) {
      if (!req[type].hasOwnProperty(queryParam) || (0, _utils.isEmpty)(req[type][queryParam])) {
        missingParams.push(queryParam);
      }
    });

    if (missingParams.length > 0) {
      return next(new _errors.CustomError(400, '"' + missingParams.join(', ') + '" not found in the request.'));
    }

    return next();
  };
};

module.exports = exports['default'];