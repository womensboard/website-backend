import { type Response } from 'express';
import { type AuthRequest } from 'types';
import { generateUploadURLUsecase } from 'usecases';
import { handleErrors } from 'utils/helpers';

export const generatePresignedURL = async (req: AuthRequest, res: Response) => {
  try {
    const filename: string = req.body.filename || '';

    const resData = await generateUploadURLUsecase.execute(filename);
    return res.json(resData);
  } catch (error) {
    return handleErrors(res, error);
  }
};
