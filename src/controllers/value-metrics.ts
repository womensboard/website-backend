import { type Response } from 'express';
import { type AuthRequest } from 'types';
import { valueMetricsUsecase } from 'usecases';
import { handleErrors } from 'utils/helpers';

export const fetchValueMetrics = async (req: AuthRequest, res: Response) => {
  try {
    const data = await valueMetricsUsecase.fetch();

    return res.status(200).json({
      data,
    });
  } catch (error) {
    handleErrors(res, error);
  }
};

export const updateValueMetrics = async (req: AuthRequest, res: Response) => {
  try {
    const input = req.body;

    const data = await valueMetricsUsecase.update(input);

    return res.status(201).json({
      msg: 'Value Metrics Updated successfully',
      data,
    });
  } catch (error) {
    handleErrors(res, error);
  }
};
