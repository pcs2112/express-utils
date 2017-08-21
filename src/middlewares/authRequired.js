/**
 * Middleware used to prevent unauthenticated users to access a route.
 */
import { CustomError } from '../errors';

export default (req, res, next) => {
  if (!req.isAuthenticated || !req.isAuthenticated()) {
    return next(new CustomError(401, 'Login required.'));
  }

  return next();
};
