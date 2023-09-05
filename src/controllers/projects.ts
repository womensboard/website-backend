import { type Response } from 'express';
import { type AuthRequest } from 'types';
import { projectsUsecase } from 'usecases';
import { handleErrors } from 'utils/helpers';

export const fetchProjects = async (req: AuthRequest, res: Response) => {
  try {
    const data = await projectsUsecase.fetch();

    return res.status(200).json({
      data,
    });
  } catch (error) {
    return handleErrors(res, error);
  }
};

export const createProject = async (req: AuthRequest, res: Response) => {
  try {
    const input = req.body;

    const data = await projectsUsecase.create(input);

    return res.status(201).json({
      msg: 'Project was created successfully',
      data,
    });
  } catch (error) {
    return handleErrors(res, error);
  }
};

export const updateProject = async (req: AuthRequest, res: Response) => {
  try {
    const input = req.body;
    const projectId = req.params.id;

    const data = await projectsUsecase.update(projectId, input);

    return res.status(200).json({
      msg: 'Project was updated successfully',
      data,
    });
  } catch (error) {
    return handleErrors(res, error);
  }
};

export const deleteProject = async (req: AuthRequest, res: Response) => {
  try {
    const projectId = req.params.id;

    await projectsUsecase.delete(projectId);

    return res.status(200).json({
      msg: 'Project Deleted',
    });
  } catch (error) {
    return handleErrors(res, error);
  }
};
