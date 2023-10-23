import { type Response } from 'express';
import { type AuthRequest } from 'types';
import { aboutFeatureUsecase } from 'usecases';
import { handleErrors } from 'utils/helpers';

export const fetchAboutFeatures = async (req: AuthRequest, res: Response) => {
  try {
    const data = await aboutFeatureUsecase.fetch();

    return res.status(200).json({
      data,
    });
  } catch (error) {
    handleErrors(res, error);
  }
};

export const updateAboutFeatures = async (req: AuthRequest, res: Response) => {
  try {
    const input = req.body;

    const data = await aboutFeatureUsecase.update(input);

    return res.status(201).json({
      msg: 'About page features updated successfully',
      data,
    });
  } catch (error) {
    handleErrors(res, error);
  }
};
