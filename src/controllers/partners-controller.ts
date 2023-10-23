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

export const updatePartner = async (req: AuthRequest, res: Response) => {
  try {
    const input = req.body;
    const partnerId = req.params.id;

    const data = await partnersUsecase.update(partnerId, input);

    return res.status(200).json({
      msg: 'Partner was updated successfully',
      data,
    });
  } catch (error) {
    return handleErrors(res, error);
  }
};

export const deletePartner = async (req: AuthRequest, res: Response) => {
  try {
    const partnerId = req.params.id;

    await partnersUsecase.delete(partnerId);

    return res.status(200).json({
      msg: 'Partner was deleted',
    });
  } catch (error) {
    return handleErrors(res, error);
  }
};
