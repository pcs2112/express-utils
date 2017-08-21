import { isNumber, normalizeInputToFloat } from 'javascript-utils/lib/number';
import CustomError from '../helpers/CustomError';

/**
 * Normalizes the list of query params to floats.
 *
 * @param {Array} queryParams
 * @param {String} type - Allowed types are "query" or "param"
 */
export default (queryParams = [], type = 'query') => (req, res, next) => {
  const invalidParams = [];
  queryParams.forEach((queryParam) => {
    if (req[type].hasOwnProperty(queryParam) && isNumber(req[type][queryParam])) {
      req[type][queryParam] = normalizeInputToFloat(req[type][queryParam]);
    } else {
      invalidParams.push(queryParam);
    }
  });

  if (invalidParams.length > 0) {
    return next(new CustomError(400, `"${invalidParams.join(', ')}" must be set to valid numbers.`));
  }

  return next();
};
