import { type Response } from 'express';
import { type AuthRequest } from 'types';
import { strategyUsecase } from 'usecases';
import { handleErrors } from 'utils/helpers';

export const fetchStrategy = async (req: AuthRequest, res: Response) => {
  try {
    const data = await strategyUsecase.fetch();

    return res.status(200).json({
      data,
    });
  } catch (error) {
    handleErrors(res, error);
  }
};

export const updateStrategy = async (req: AuthRequest, res: Response) => {
  try {
    const input = req.body;

    const data = await strategyUsecase.update(input);

    return res.status(201).json({
      msg: 'Strategy Updated successfully',
      data,
    });
  } catch (error) {
    handleErrors(res, error);
  }
};
