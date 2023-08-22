import { type AuthRequest } from 'types';
import { type Response } from 'express';
import { trusteeUsecase } from 'usecases';
import { handleErrors } from 'utils/helpers';

export const createTrustee = async (req: AuthRequest, res: Response) => {
  try {
    const input = req.body;

    const data = await trusteeUsecase.create(input);

    return res.status(201).json({
      msg: 'Trustee was created successfully',
      data,
    });
  } catch (error) {
    return handleErrors(res, error);
  }
};

export const fetchTrustees = async (req: AuthRequest, res: Response) => {
  try {
    const data = await trusteeUsecase.fetch();

    return res.status(200).json({
      data,
    });
  } catch (error) {
    return handleErrors(res, error);
  }
};

export const updateTrustee = async (req: AuthRequest, res: Response) => {
  try {
    const trusteeId = req.params.id;
    const trusteeUpdateData = req.body;
    const data = await trusteeUsecase.update(trusteeId, trusteeUpdateData);

    return res.status(200).json({
      msg: 'Trustee was updated successfully',
      data,
    });
  } catch (error) {
    return handleErrors(res, error);
  }
};

export const deleteTrustee = async (req: AuthRequest, res: Response) => {
  try {
    const trusteeId = req.params.id;

    await trusteeUsecase.delete(trusteeId);

    return res.status(200).json({
      msg: 'Trustee Deleted',
    });
  } catch (error) {
    return handleErrors(res, error);
  }
};
