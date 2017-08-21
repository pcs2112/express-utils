/**
 * Middleware used to prevent unauthenticated users to access a route.
 */
import CustomError from '../helpers/CustomError';

export default authRequired = (req, res, next) => {
  if (!req.isAuthenticated || !req.isAuthenticated()) {
    return next(new CustomError(401, 'Login required.'));
  }

  return next();
};
