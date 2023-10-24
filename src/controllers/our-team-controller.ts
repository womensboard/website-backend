import { type Response } from 'express';
import { type AuthRequest } from 'types';
import { ourTeamUsecase } from 'usecases';
import { handleErrors } from 'utils/helpers';

export const fetchOurTeam = async (req: AuthRequest, res: Response) => {
  try {
    const data = await ourTeamUsecase.fetch();

    return res.status(200).json({
      data,
    });
  } catch (error) {
    handleErrors(res, error);
  }
};

export const updateOurTeam = async (req: AuthRequest, res: Response) => {
  try {
    const input = req.body;

    const data = await ourTeamUsecase.update(input);

    return res.status(201).json({
      msg: 'Our team updated successfully',
      data,
    });
  } catch (error) {
    handleErrors(res, error);
  }
};
