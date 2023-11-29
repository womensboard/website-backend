import { type Response } from 'express';
import { type AuthRequest } from 'types';
import { handleErrors } from 'utils/helpers';
import { activitiesUsecase } from 'usecases';

export const createActivities = async (req: AuthRequest, res: Response) => {
  try {
    const input = req.body;

    const data = await activitiesUsecase.create(input);

    return res.status(201).json({
      msg: 'Activities was created successfully',
      data,
    });
  } catch (error) {
    return handleErrors(res, error);
  }
};

export const fetchActivities = async (req: AuthRequest, res: Response) => {
  try {
    const data = await activitiesUsecase.fetch();

    return res.status(200).json({
      data,
    });
  } catch (error) {
    return handleErrors(res, error);
  }
};

export const updateActivities = async (req: AuthRequest, res: Response) => {
  try {
    const activitiesId = req.params.id;
    const updatedActivitiesData = req.body;

    const data = await activitiesUsecase.update(
      activitiesId,
      updatedActivitiesData
    );

    return res.status(200).json({
      msg: 'Activities was updated successfully',
      data,
    });
  } catch (error) {
    return handleErrors(res, error);
  }
};

export const deleteActivities = async (req: AuthRequest, res: Response) => {
  try {
    const activitiesId = req.params.id;

    await activitiesUsecase.delete(activitiesId);

    return res.status(200).json({
      msg: 'Activities Deleted',
    });
  } catch (error) {
    return handleErrors(res, error);
  }
};
