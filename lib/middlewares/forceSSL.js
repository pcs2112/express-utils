'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Redirects all requests to https.
 *
 * @param {Boolean} sslEnabled
 */
exports.default = function () {
  var sslEnabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return function (req, res, next) {
    if (sslEnabled && req.headers['x-forwarded-proto'] !== 'https') {
      res.redirect(302, 'https://' + req.hostname + req.originalUrl);
    } else {
      next();
    }
  };
};

module.exports = exports['default'];