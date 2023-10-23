import { type AuthRequest } from 'types';
import { type Response } from 'express';
import { managementUsecase } from 'usecases';
import { handleErrors } from 'utils/helpers';

export const createManagement = async (req: AuthRequest, res: Response) => {
  try {
    const input = req.body;

    const data = await managementUsecase.create(input);

    return res.status(201).json({
      msg: 'Management was created successfully',
      data,
    });
  } catch (error) {
    return handleErrors(res, error);
  }
};

export const fetchManagements = async (req: AuthRequest, res: Response) => {
  try {
    const data = await managementUsecase.fetch();

    return res.status(200).json({
      data,
    });
  } catch (error) {
    return handleErrors(res, error);
  }
};

export const updateManagement = async (req: AuthRequest, res: Response) => {
  try {
    const managementId = req.params.id;
    const managementUpdateData = req.body;
    const data = await managementUsecase.update(
      managementId,
      managementUpdateData
    );

    return res.status(200).json({
      msg: 'Management was updated successfully',
      data,
    });
  } catch (error) {
    return handleErrors(res, error);
  }
};

export const deleteManagement = async (req: AuthRequest, res: Response) => {
  try {
    const managementId = req.params.id;

    await managementUsecase.delete(managementId);

    return res.status(200).json({
      msg: 'Management deleted',
    });
  } catch (error) {
    return handleErrors(res, error);
  }
};
