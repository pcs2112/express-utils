"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _xssFilters = _interopRequireDefault(require("xss-filters"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Recursively applies the xss filter to all t
 * he string properties of the req objects.
 * @param {Object} obj
 */
var clean = function clean(obj) {
  Object.keys(obj).forEach(function (key) {
    if (obj[key] === null) {
      return;
    }

    if (_typeof(obj[key]) === 'object') {
      clean(obj[key]);
    } else if (typeof obj[key] === 'string') {
      obj[key] = _xssFilters.default.inHTMLData(obj[key].trim()); // eslint-disable-line
    }
  });
};

var _default = function _default(types) {
  return function (req, res, next) {
    var normalizedTypes;

    if (typeof types === 'string') {
      normalizedTypes = types.split(',').map(function (type) {
        return type.trim();
      });
    }

    ['body', 'query', 'params'].forEach(function (type) {
      if (normalizedTypes.indexOf(type) > -1 && req[type]) {
        clean(req[type]);
      }
    });
    next();
  };
};

exports.default = _default;
module.exports = exports.default;