'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Error class used to normalize Twilio API errors.
 */

/**
 * Resolves a user friendly message based on the specified API error code.
 * @param {Number} code
 * @returns {String}
 */
var getMessage = function getMessage(code) {
  var message = null;
  switch (code) {
    case 21606:
      message = 'A valid Twilio number is required. Please contact support if the problem persists.';
      break;
    case 21211:
    case 21217:
    case 21401:
    case 21407:
    case 21421:
    case 21601:
    case 21604:
      message = 'A valid number is required.';
      break;
    default:
      message = 'Internal error. Please contact support if the problem persists.';
  }

  return message;
};

var TwilioError = function (_Error) {
  _inherits(TwilioError, _Error);

  /**
   * @param {Object} response - API error response object
   */
  function TwilioError(response) {
    _classCallCheck(this, TwilioError);

    var _this = _possibleConstructorReturn(this, (TwilioError.__proto__ || Object.getPrototypeOf(TwilioError)).call(this, getMessage(response.code)));

    Error.captureStackTrace(_this, TwilioError);
    _this.name = 'TwilioError';
    _this.status = response.status;
    _this.response = {
      status: response.status,
      message: response.message,
      moreInfo: response.moreInfo,
      detail: response.detail,
      code: response.code
    };
    return _this;
  }

  return TwilioError;
}(Error);

exports.default = TwilioError;
module.exports = exports['default'];