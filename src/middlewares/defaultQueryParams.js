/**
 * Sets the default values for the specified list of query params.
 *
 * @param {Object} queryParams
 * @param {String} type - Allowed types are "query" or "param"
 */
export default (queryParams = {}, type = 'query') => (req, res, next) => {
  Object.keys(queryParams).forEach((queryParam) => {
    if (!Object.prototype.hasOwnProperty.call(req[type], queryParam)) {
      req[type][queryParam] = queryParams[queryParam];
    }
  });

  return next();
};
