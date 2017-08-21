'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Error class used to normalize Stripe API errors.
 */
var StripeError = function (_Error) {
  _inherits(StripeError, _Error);

  /**
   * @param {Object} response - API response object
   */
  function StripeError(response) {
    _classCallCheck(this, StripeError);

    var _this = _possibleConstructorReturn(this, (StripeError.__proto__ || Object.getPrototypeOf(StripeError)).call(this, response.message));

    Error.captureStackTrace(_this, StripeError);
    _this.name = 'StripeError';
    _this.status = response.statusCode;
    _this.type = response.type;
    _this.response = {
      requestId: response.requestId,
      statusCode: response.statusCode,
      message: response.message,
      type: response.type,
      rawType: response.rawType,
      code: response.code,
      param: response.param
    };
    return _this;
  }

  return StripeError;
}(Error);

exports.default = StripeError;
module.exports = exports['default'];