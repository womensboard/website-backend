import { type Response } from 'express';
import { type AuthRequest } from 'types';
import { aboutPageUsecase } from 'usecases';
import { handleErrors } from 'utils/helpers';

export const fetchAboutPage = async (req: AuthRequest, res: Response) => {
  try {
    const data = await aboutPageUsecase.fetch();

    return res.status(200).json({
      data,
    });
  } catch (error) {
    return handleErrors(res, error);
  }
};

export const createAboutPage = async (req: AuthRequest, res: Response) => {
  try {
    const input = req.body;

    const data = await aboutPageUsecase.create(input);

    return res.status(201).json({
      msg: 'About Page Content created successfully',
      data,
    });
  } catch (error) {
    handleErrors(res, error);
  }
};

export const updateAboutPage = async (req: AuthRequest, res: Response) => {
  try {
    const input = req.body;
    const IdToUpdate = req.params.id;

    const data = await aboutPageUsecase.update(IdToUpdate, input);

    return res.status(200).json({
      msg: 'About Page Content updated successfully',
      data,
    });
  } catch (error) {
    return handleErrors(res, error);
  }
};

export const deleteAboutPage = async (req: AuthRequest, res: Response) => {
  try {
    const idToDelete = req.params.id;

    await aboutPageUsecase.delete(idToDelete);

    return res.status(200).json({
      msg: 'About Page Content Deleted',
    });
  } catch (error) {
    handleErrors(res, error);
  }
};
