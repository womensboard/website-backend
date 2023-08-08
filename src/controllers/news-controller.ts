import { type Response } from 'express';
import { type AuthRequest } from 'types';
import { handleErrors } from 'utils/helpers';
import { NewsDataGateway } from 'data-gateway/news-data-gateway';
import { FileServiceFactory } from 'services';

const fileService = FileServiceFactory.create();

const newsDataGateway = new NewsDataGateway(fileService);

export const createNews = async (req: AuthRequest, res: Response) => {
  try {
    const input = {
      title: req.body.title,
      description: req.body.description,
      createdAt: new Date(),
      updatedAt: new Date(),
      author: req.body.author,
      imageURL: req.body.imageURL,
    };

    await newsDataGateway.create(input);

    return res.status(201).json({
      success: true,
      msg: 'News was created successfully',
    });
  } catch (error) {
    console.error(error);
    return handleErrors(res, error);
  }
};

export const fetchNews = async (req: AuthRequest, res: Response) => {
  try {
    const newsList = await newsDataGateway.fetch();
    
    return res.status(200).json({
      success: true,
      data: newsList,
    });
  } catch (error) {
    console.error(error);
    return handleErrors(res, error);
  }
};

export const updateNews = async (req: AuthRequest, res: Response) => {
  try {
    const newsId = req.params.id;
    const updatedNewsData = req.body;

    await newsDataGateway.update(newsId, updatedNewsData);
    
    return res.status(204).json({
      success: true,
      msg: 'News was updated successfully',
    });
  } catch (error) {
    console.error(error);
    return handleErrors(res, error);
  }
};

export const deleteNews = async (req: AuthRequest, res: Response) => {
  try {
    const newsId = req.params.id;

    const result = await newsDataGateway.delete(newsId);

    return res.status(204).json({
      msg: result.msg,
    });
  } catch (error) {
    console.error(error);
    return handleErrors(res, error);
  }
};



