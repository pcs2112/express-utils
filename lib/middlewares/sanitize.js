'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Middleware to sanitize the body of a request
                                                                                                                                                                                                                                                                               */


var _xssFilters = require('xss-filters');

var _xssFilters2 = _interopRequireDefault(_xssFilters);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    } else if (typeof req.body[key] === 'string') {
      obj[key] = _xssFilters2.default.inHTMLData(obj[key].trim());
    }
  });
};

exports.default = function (types) {
  return function (req, res, next) {
    var normalizedTypes = void 0;
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

module.exports = exports['default'];