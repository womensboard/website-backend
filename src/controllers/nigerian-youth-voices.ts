import { type Response } from 'express';
import { type AuthRequest } from 'types';
import { nigerianYouthVoicesUsecase } from 'usecases';
import { handleErrors } from 'utils/helpers';

export const fetchNigerianYouthVoices = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const data = await nigerianYouthVoicesUsecase.fetch();

    return res.status(200).json({
      data,
    });
  } catch (error) {
    handleErrors(res, error);
  }
};

export const updateNigerianYouthVoice = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const input = req.body;

    const data = await nigerianYouthVoicesUsecase.update(input);

    return res.status(200).json({
      msg: 'Nigerian Youth Voice created successfully',
      data,
    });
  } catch (error) {
    handleErrors(res, error);
  }
};
