/**
 * Middleware used to prevent caching in route.
 */
const defaultHeaders = {
  'Surrogate-Control': 'no-store',
  'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
  Pragma: 'no-cache',
  Expires: '0'
};

/**
 * @param {Object|undefined} headers - List of caching headers
 */
export default headers => (req, res, next) => {
  let normalizedHeaders;

  if (typeof headers !== 'object') {
    normalizedHeaders = { ...defaultHeaders };
  } else {
    normalizedHeaders = { ...headers };
  }

  const keys = Object.keys(normalizedHeaders);
  const keysLength = keys.length;
  if (keysLength > 0) {
    for (let i = 0; i < keysLength; i++) {
      const header = keys[i];
      res.setHeader(header, normalizedHeaders[header]);
    }
  }

  return next();
};
