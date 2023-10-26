import { type Response } from 'express';
import { type AuthRequest } from 'types';
import { partnersUsecase } from 'usecases';
import { handleErrors } from 'utils/helpers';

export const fetchPartners = async (req: AuthRequest, res: Response) => {
  try {
    const data = await partnersUsecase.fetch();

    return res.status(200).json({
      data,
    });
  } catch (error) {
    return handleErrors(res, error);
  }
};

export const createPartner = async (req: AuthRequest, res: Response) => {
  try {
    const input = req.body;

    const data = await partnersUsecase.create(input);

    return res.status(201).json({
      msg: 'Partner was created successfully',
      data,
    });
  } catch (error) {
    return handleErrors(res, error);
  }
};
