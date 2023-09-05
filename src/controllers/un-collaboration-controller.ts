import { type Response } from 'express';
import { type AuthRequest } from 'types';
import { unCollaborationUsecase } from 'usecases';
import { handleErrors } from 'utils/helpers';

export const fetchUnCollaborations = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const data = await unCollaborationUsecase.fetch();

    return res.status(200).json({
      data,
    });
  } catch (error) {
    handleErrors(res, error);
  }
};

export const createUnCollaboration = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const input = req.body;

    const data = await unCollaborationUsecase.create(input);

    return res.status(201).json({
      msg: 'UN Collaboration created successfully',
      data,
    });
  } catch (error) {
    handleErrors(res, error);
  }
};

export const updateUnCollaboration = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const idToUpdate = req.params.id;
    const input = req.body;

    const data = await unCollaborationUsecase.update(idToUpdate, input);

    return res.status(200).json({
      msg: 'UN Collaboration updated successfully',
      data,
    });
  } catch (error) {
    handleErrors(res, error);
  }
};

export const deleteUnCollaborations = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const idToDelete = req.params.id;

    await unCollaborationUsecase.delete(idToDelete);

    return res.status(200).json({
      msg: 'UN Collaboration Deleted',
    });
  } catch (error) {
    handleErrors(res, error);
  }
};
