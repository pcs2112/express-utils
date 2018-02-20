import { CustomError } from '../errors';

export default (userTypesAllowed, userPropertyName = 'user', userTypePropertyName = 'userTypeId') =>
  (req, res, next) => {
    if (!req.isAuthenticated()
      || !Array.isArray(userTypesAllowed)
      || !req[userTypesAllowed]
      || !req[userTypesAllowed][userTypePropertyName]
      || userTypesAllowed.indexOf(req[userPropertyName][userTypePropertyName]) < 0
    ) {
      return next(new CustomError(403, 'Access denied.'));
    }

    return next();
  };
