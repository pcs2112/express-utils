'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Custom error class used to normalize application response error.
 */
var CustomError = function (_Error) {
  _inherits(CustomError, _Error);

  /**
   *
   * @param {Number} status
   * @param {String} msg
   * @param {Object|null} errors
   */
  function CustomError(status, msg) {
    var errors = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    _classCallCheck(this, CustomError);

    var _this = _possibleConstructorReturn(this, (CustomError.__proto__ || Object.getPrototypeOf(CustomError)).call(this, msg));

    _this.status = 500;
    _this.errors = null;

    Error.captureStackTrace(_this, CustomError);
    _this.name = 'CustomError';
    _this.status = status;

    if (errors && errors.errors) {
      _this.errors = {};
      errors.errors.forEach(function (error) {
        _this.errors[error.path] = error.message;
      });
    }
    return _this;
  }

  return CustomError;
}(Error);

exports.default = CustomError;
module.exports = exports['default'];