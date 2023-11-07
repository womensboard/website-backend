import { type Response } from 'express';
import { type AuthRequest } from 'types';
import { galleryUsecase } from 'usecases';
import { handleErrors } from 'utils/helpers';

export const fetchGallery = async (req: AuthRequest, res: Response) => {
  try {
    const data = await galleryUsecase.fetch();

    return res.status(200).json({
      data,
    });
  } catch (error) {
    return handleErrors(res, error);
  }
};

export const createGallery = async (req: AuthRequest, res: Response) => {
  try {
    const input = req.body;

    const data = await galleryUsecase.create(input);

    return res.status(201).json({
      msg: 'Gallery was created successfully',
      data,
    });
  } catch (error) {
    return handleErrors(res, error);
  }
};
