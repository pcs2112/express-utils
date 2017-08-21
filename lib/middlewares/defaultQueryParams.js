'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Sets the default values for the specified list of query params.
 *
 * @param {Object} queryParams
 * @param {String} type - Allowed types are "query" or "param"
 */
exports.default = function () {
  var queryParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'query';
  return function (req, res, next) {
    Object.keys(queryParams).forEach(function (queryParam) {
      if (!req[type].hasOwnProperty(queryParam)) {
        req[type][queryParam] = queryParams[queryParam];
      }
    });

    return next();
  };
};

module.exports = exports['default'];