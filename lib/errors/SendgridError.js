'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Error class used to normalize Sendgrid API errors.
 */
var SendgridError = function (_Error) {
  _inherits(SendgridError, _Error);

  /**
   * @param {Object} response - API error response object
   */
  function SendgridError(response) {
    _classCallCheck(this, SendgridError);

    var _this = _possibleConstructorReturn(this, (SendgridError.__proto__ || Object.getPrototypeOf(SendgridError)).call(this, response.message));

    Error.captureStackTrace(_this, SendgridError);
    _this.name = 'SendgridError';
    _this.status = response.response.statusCode;
    _this.response = response.response.body;
    return _this;
  }

  return SendgridError;
}(Error);

exports.default = SendgridError;
module.exports = exports['default'];