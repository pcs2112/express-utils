"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("javascript-utils/lib/utils");

var _errors = require("../errors");

/**
 * Verifies the list of specified query params
 * have been set.
 *
 * @param {Array} queryParams
 * @param {String} type - Allowed types are "query" or "param"
 */
var _default = function _default() {
  var queryParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'query';
  return function (req, res, next) {
    var missingParams = [];
    queryParams.forEach(function (queryParam) {
      if (!Object.prototype.hasOwnProperty.call(req[type], queryParam) || (0, _utils.isEmpty)(req[type][queryParam])) {
        missingParams.push(queryParam);
      }
    });

    if (missingParams.length > 0) {
      return next(new _errors.CustomError(400, "\"".concat(missingParams.join(', '), "\" not found in the request.")));
    }

    return next();
  };
};

exports.default = _default;
module.exports = exports.default;