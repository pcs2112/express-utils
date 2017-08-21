'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Error class used to normalize Cloudinary API errors.
 */
var CloudinaryError = function (_Error) {
  _inherits(CloudinaryError, _Error);

  /**
   * @param {Object} response - Cloudinary response object
   */
  function CloudinaryError(response) {
    _classCallCheck(this, CloudinaryError);

    var _this = _possibleConstructorReturn(this, (CloudinaryError.__proto__ || Object.getPrototypeOf(CloudinaryError)).call(this, response.error.message));

    Error.captureStackTrace(_this, CloudinaryError);
    _this.name = 'CloudinaryError';
    _this.status = response.error.http_code;
    _this.response = response.error;
    return _this;
  }

  return CloudinaryError;
}(Error);

exports.default = CloudinaryError;
module.exports = exports['default'];