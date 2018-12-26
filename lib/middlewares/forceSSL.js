"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Redirects all requests to https.
 *
 * @param {Boolean} sslEnabled
 */
var _default = function _default() {
  var sslEnabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return function (req, res, next) {
    if (sslEnabled && req.headers['x-forwarded-proto'] !== 'https') {
      res.redirect(302, "https://".concat(req.hostname).concat(req.originalUrl));
    } else {
      next();
    }
  };
};

exports.default = _default;
module.exports = exports.default;