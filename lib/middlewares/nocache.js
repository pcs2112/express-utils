'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Middleware used to prevent caching in route.
 */
var defaultHeaders = {
  'Surrogate-Control': 'no-store',
  'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
  Pragma: 'no-cache',
  Expires: '0'
};

/**
 * @param {Object|undefined} headers - List of caching headers
 */

exports.default = function (headers) {
  return function (req, res, next) {
    var normalizedHeaders = void 0;

    if ((typeof headers === 'undefined' ? 'undefined' : _typeof(headers)) !== 'object') {
      normalizedHeaders = _extends({}, defaultHeaders);
    } else {
      normalizedHeaders = _extends({}, headers);
    }

    var keys = Object.keys(normalizedHeaders);
    var keysLength = keys.length;
    if (keysLength > 0) {
      for (var i = 0; i < keysLength; i++) {
        var header = keys[i];
        res.setHeader(header, normalizedHeaders[header]);
      }
    }

    return next();
  };
};

module.exports = exports['default'];