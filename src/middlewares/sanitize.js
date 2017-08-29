/**
 * Middleware to sanitize the body of a request
 */
import xssFilters from 'xss-filters';

/**
 * Recursively applies the xss filter to all t
 * he string properties of the req objects.
 * @param {Object} obj
 */
const clean = (obj) => {
  Object.keys(obj).forEach((key) => {
    if (obj[key] === null) {
      return;
    }

    if (typeof obj[key] === 'object') {
      clean(obj[key]);
    } else if (typeof obj[key] === 'string') {
      obj[key] = xssFilters.inHTMLData(obj[key].trim());
    }
  });
};

export default (types) => (req, res, next) => {
  let normalizedTypes;
  if (typeof types === 'string') {
    normalizedTypes = types.split(',').map((type) => type.trim());
  }

  ['body', 'query', 'params'].forEach((type) => {
    if (normalizedTypes.indexOf(type) > -1 && req[type]) {
      clean(req[type]);
    }
  });

  next();
};
