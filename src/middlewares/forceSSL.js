/**
 * Redirects all requests to https.
 *
 * @param {Boolean} sslEnabled
 */
export default (sslEnabled = false) => (req, res, next) => {
  if (sslEnabled && req.headers['x-forwarded-proto'] !== 'https') {
    res.redirect(302, `https://${req.hostname}${req.originalUrl}`);
  } else {
    next();
  }
};
