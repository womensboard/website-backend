import { type AuthRequest } from 'types';
import { type Response } from 'express';
import { unCollaborationSectionUsecase } from 'usecases';
import { handleErrors } from 'utils/helpers';

export const createCollaboration = async (req: AuthRequest, res: Response) => {
  try {
    const input = req.body;

    const data = await unCollaborationSectionUsecase.create(input);

    return res.status(201).json({
      msg: 'Collaboration was created successfully',
      data,
    });
  } catch (error) {
    return handleErrors(res, error);
  }
};

export const fetchCollaborations = async (req: AuthRequest, res: Response) => {
  try {
    const data = await unCollaborationSectionUsecase.fetch();

    return res.status(200).json({
      data,
    });
  } catch (error) {
    return handleErrors(res, error);
  }
};

export const updateCollaboration = async (req: AuthRequest, res: Response) => {
  try {
    const collaborationId = req.params.id;
    const collaborationUpdateData = req.body;
    const data = await unCollaborationSectionUsecase.update(
      collaborationId,
      collaborationUpdateData
    );

    return res.status(200).json({
      msg: 'Collaboration was updated successfully',
      data,
    });
  } catch (error) {
    return handleErrors(res, error);
  }
};

export const deleteCollaboration = async (req: AuthRequest, res: Response) => {
  try {
    const collaborationId = req.params.id;

    await unCollaborationSectionUsecase.delete(collaborationId);

    return res.status(200).json({
      msg: 'Collaboration deleted',
    });
  } catch (error) {
    return handleErrors(res, error);
  }
};

export const filterCollaborationByYear = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const year = req.body.year;
    const section = req.body.section;

    const data = await unCollaborationSectionUsecase.filterByYear(
      year,
      section
    );

    return res.status(200).json({
      data,
    });
  } catch (error) {
    return handleErrors(res, error);
  }
};

export const fetchCollaborationById = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const collaborationId = req.params.id;

    const data = await unCollaborationSectionUsecase.fetchById(collaborationId);

    return res.status(200).json({
      data,
    });
  } catch (error) {
    return handleErrors(res, error);
  }
};
