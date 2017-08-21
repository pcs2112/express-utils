'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _number = require('javascript-utils/lib/number');

var _CustomError = require('../helpers/CustomError');

var _CustomError2 = _interopRequireDefault(_CustomError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      if (req[type].hasOwnProperty(queryParam) && (0, _number.isNumber)(req[type][queryParam])) {
        req[type][queryParam] = (0, _number.normalizeInputToInteger)(req[type][queryParam]);
      } else {
        invalidParams.push(queryParam);
      }
    });

    if (invalidParams.length > 0) {
      return next(new _CustomError2.default(400, '"' + invalidParams.join(', ') + '" must be set to valid numbers.'));
    }

    return next();
  };
};

module.exports = exports['default'];