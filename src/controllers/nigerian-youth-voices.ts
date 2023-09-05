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

export const createNigerianYouthVoice = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const input = req.body;

    const data = await nigerianYouthVoicesUsecase.create(input);

    return res.status(201).json({
      msg: 'Nigerian Youth Voice created successfully',
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
    const youthVoiceId = req.params.id;
    const input = req.body;

    const data = await nigerianYouthVoicesUsecase.update(youthVoiceId, input);

    return res.status(200).json({
      msg: 'Nigerian Youth Voice created successfully',
      data,
    });
  } catch (error) {
    handleErrors(res, error);
  }
};

export const deleteNigerianYouthVoice = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const youthVoiceId = req.params.id;

    await nigerianYouthVoicesUsecase.delete(youthVoiceId);

    return res.status(200).json({
      msg: 'Nigerian Youth Voice deleted',
    });
  } catch (error) {
    handleErrors(res, error);
  }
};
