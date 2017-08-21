'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Error class used to normalize Google Maps API errors.
 */
var GoogleMapsError = function (_Error) {
  _inherits(GoogleMapsError, _Error);

  /**
   * @param {String} message - Error message
   * @param {Number} code
   * @param {Object} response - API error response object
   */
  function GoogleMapsError(message, code, response) {
    _classCallCheck(this, GoogleMapsError);

    var _this = _possibleConstructorReturn(this, (GoogleMapsError.__proto__ || Object.getPrototypeOf(GoogleMapsError)).call(this, message));

    Error.captureStackTrace(_this, GoogleMapsError);
    _this.name = 'GoogleMapsError';
    _this.status = code;
    _this.response = response;
    return _this;
  }

  return GoogleMapsError;
}(Error);

exports.default = GoogleMapsError;
module.exports = exports['default'];