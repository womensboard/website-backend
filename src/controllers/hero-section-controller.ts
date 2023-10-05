import { type Response } from 'express';
import { type AuthRequest } from 'types';
import { heroSectionUsecase } from 'usecases';
import { handleErrors } from 'utils/helpers';

export const fetchHero = async (req: AuthRequest, res: Response) => {
  try {
    const data = await heroSectionUsecase.fetch();

    return res.status(200).json({
      data,
    });
  } catch (error) {
    return handleErrors(res, error);
  }
};

export const updateHero = async (req: AuthRequest, res: Response) => {
  try {
    const input = req.body;

    const data = await heroSectionUsecase.update(input);

    return res.status(200).json({
      msg: 'Hero Section updated successfully',
      data,
    });
  } catch (error) {
    handleErrors(res, error);
  }
};
