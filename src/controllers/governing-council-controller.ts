import { type AuthRequest } from 'types';
import { type Response } from 'express';
import { governingCouncilUsecase } from 'usecases';
import { handleErrors } from 'utils/helpers';

export const createGoverningCouncil = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const input = req.body;

    const data = await governingCouncilUsecase.create(input);

    return res.status(201).json({
      msg: 'Governing council was created successfully',
      data,
    });
  } catch (error) {
    return handleErrors(res, error);
  }
};

export const fetchGoverningCouncil = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const data = await governingCouncilUsecase.fecth();

    return res.status(200).json({
      data,
    });
  } catch (error) {
    handleErrors(res, error);
  }
};

export const updateGoverningCouncil = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const governingCouncilId = req.params.id;
    const governingCouncilUpdateData = req.body;
    const data = await governingCouncilUsecase.update(
      governingCouncilId,
      governingCouncilUpdateData
    );

    return res.status(200).json({
      msg: 'Governing council was updated successfully',
      data,
    });
  } catch (error) {
    handleErrors(res, error);
  }
};

export const deleteGoverningCouncil = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const governingCouncilId = req.params.id;

    await governingCouncilUsecase.delete(governingCouncilId);

    return res.status(200).json({
      masg: 'Governing council deleted',
    });
  } catch (error) {
    handleErrors(res, error);
  }
};
