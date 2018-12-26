"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Sets the default values for the specified list of query params.
 *
 * @param {Object} queryParams
 * @param {String} type - Allowed types are "query" or "param"
 */
var _default = function _default() {
  var queryParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'query';
  return function (req, res, next) {
    Object.keys(queryParams).forEach(function (queryParam) {
      if (!Object.prototype.hasOwnProperty.call(req[type], queryParam)) {
        req[type][queryParam] = queryParams[queryParam];
      }
    });
    return next();
  };
};

exports.default = _default;
module.exports = exports.default;