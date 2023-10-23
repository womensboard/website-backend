import { type Response } from 'express';
import { type AuthRequest } from 'types';
import { contactUsecase } from 'usecases';
import { handleErrors } from 'utils/helpers';

export const fetchContact = async (req: AuthRequest, res: Response) => {
  try {
    const data = await contactUsecase.fetch();

    return res.status(200).json({
      data,
    });
  } catch (error) {
    return handleErrors(res, error);
  }
};

export const updateContact = async (req: AuthRequest, res: Response) => {
  try {
    const input = req.body;

    const data = await contactUsecase.update(input);

    return res.status(200).json({
      msg: 'Contact updated successfully',
      data,
    });
  } catch (error) {
    handleErrors(res, error);
  }
};
