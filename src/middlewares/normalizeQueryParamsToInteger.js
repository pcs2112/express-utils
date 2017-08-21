import { isNumber, normalizeInputToInteger } from 'javascript-utils/lib/number';
import { CustomError } from '../errors';

/**
 * Normalizes the list of query params to integers.
 *
 * @param {Array} queryParams
 * @param {String} type - Allowed types are "query" or "param"
 */
export default (queryParams = [], type = 'query') => (req, res, next) => {
  const invalidParams = [];
  queryParams.forEach((queryParam) => {
    if (req[type].hasOwnProperty(queryParam) && isNumber(req[type][queryParam])) {
      req[type][queryParam] = normalizeInputToInteger(req[type][queryParam]);
    } else {
      invalidParams.push(queryParam);
    }
  });

  if (invalidParams.length > 0) {
    return next(new CustomError(400, `"${invalidParams.join(', ')}" must be set to valid numbers.`));
  }

  return next();
};
