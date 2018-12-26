"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var _default = function _default(headers) {
  return function (req, res, next) {
    var normalizedHeaders;

    if (_typeof(headers) !== 'object') {
      normalizedHeaders = _objectSpread({}, defaultHeaders);
    } else {
      normalizedHeaders = _objectSpread({}, headers);
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

exports.default = _default;
module.exports = exports.default;