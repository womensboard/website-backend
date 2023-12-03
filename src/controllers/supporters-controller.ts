import { type Response } from 'express';
import { type AuthRequest } from 'types';
import { supportersUsecase } from 'usecases';
import { handleErrors } from 'utils/helpers';

export const fetchSupporters = async (req: AuthRequest, res: Response) => {
  try {
    const data = await supportersUsecase.fetch();

    return res.status(200).json({
      data,
    });
  } catch (error) {
    return handleErrors(res, error);
  }
};

export const createSupporters = async (req: AuthRequest, res: Response) => {
  try {
    const input = req.body;

    const data = await supportersUsecase.create(input);

    return res.status(201).json({
      msg: 'Supporters was created successfully',
      data,
    });
  } catch (error) {
    return handleErrors(res, error);
  }
};
