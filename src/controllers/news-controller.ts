import { type Response } from 'express';
import { type AuthRequest } from 'types';
import { handleErrors } from 'utils/helpers';
import { newsUsecase } from 'usecases';

export const createNews = async (req: AuthRequest, res: Response) => {
  try {
    const input = req.body;

    const data = await newsUsecase.create(input);

    return res.status(201).json({
      msg: 'News was created successfully',
      data,
    });
  } catch (error) {
    return handleErrors(res, error);
  }
};

export const fetchNews = async (req: AuthRequest, res: Response) => {
  try {
    const data = await newsUsecase.fetch();

    return res.status(200).json({
      data,
    });
  } catch (error) {
    return handleErrors(res, error);
  }
};

export const updateNews = async (req: AuthRequest, res: Response) => {
  try {
    const newsId = req.params.id;
    const updatedNewsData = req.body;

    const data = await newsUsecase.update(newsId, updatedNewsData);

    return res.status(200).json({
      msg: 'News was updated successfully',
      data,
    });
  } catch (error) {
    return handleErrors(res, error);
  }
};

export const deleteNews = async (req: AuthRequest, res: Response) => {
  try {
    const newsId = req.params.id;

    await newsUsecase.delete(newsId);

    return res.status(200).json({
      msg: 'News Deleted',
    });
  } catch (error) {
    return handleErrors(res, error);
  }
};
