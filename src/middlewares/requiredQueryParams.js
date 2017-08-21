import CustomError from '../helpers/CustomError';
import { isEmpty } from 'javascript-utils/lib/utils';

/**
 * Verifies the list of specified query params
 * have been set.
 *
 * @param {Array} queryParams
 * @param {String} type - Allowed types are "query" or "param"
 */
export default (queryParams = [], type = 'query') => (req, res, next) => {
  const missingParams = [];
  queryParams.forEach((queryParam) => {
    if (!req[type].hasOwnProperty(queryParam) || isEmpty(req[type][queryParam])) {
      missingParams.push(queryParam);
    }
  });

  if (missingParams.length > 0) {
    return next(new CustomError(400, `"${missingParams.join(', ')}" not found in the request.`));
  }

  return next();
};
