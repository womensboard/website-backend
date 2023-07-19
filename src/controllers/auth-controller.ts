import { ALLOWED_ADMIN_EMAILS } from 'config';
import { type NextFunction, type Request, type Response } from 'express';
import { type AuthRequest } from 'types';
import { authMiddlewareUsecase, loginUserUsecase } from 'usecases';
import { handleErrors } from 'utils/helpers';

export const socialLogin = async (req: Request, res: Response) => {
  try {
    const data = await loginUserUsecase.execute(
      req.body.token,
      ALLOWED_ADMIN_EMAILS
    );
    return res.json(data);
  } catch (error) {
    return handleErrors(res, error);
  }
};

export const authRequired = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const authorization = req.headers.authorization;
    const decoded = await authMiddlewareUsecase.execute(authorization);
    req.decoded = decoded;
    next();
    return;
  } catch (error) {
    return handleErrors(res, error);
  }
};
