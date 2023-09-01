import { type AuthRequest } from 'types';
import { type Response } from 'express';
import { boardMembersUsecase } from 'usecases';
import { handleErrors } from 'utils/helpers';

export const createBoardMember = async (req: AuthRequest, res: Response) => {
  try {
    const input = req.body;

    const data = await boardMembersUsecase.create(input);

    return res.status(201).json({
      msg: 'Board Member was created successfully',
      data,
    });
  } catch (error) {
    return handleErrors(res, error);
  }
};

export const fetchBoardMembers = async (req: AuthRequest, res: Response) => {
  try {
    const data = await boardMembersUsecase.fecth();

    return res.status(200).json({
      data,
    });
  } catch (error) {
    handleErrors(res, error);
  }
};

export const updateBoardMember = async (req: AuthRequest, res: Response) => {
  try {
    const boardMemberId = req.params.id;
    const boardMemberUpdateData = req.body;
    const data = await boardMembersUsecase.update(
      boardMemberId,
      boardMemberUpdateData
    );

    return res.status(200).json({
      msg: 'Board Member was updated successfully',
      data,
    });
  } catch (error) {
    handleErrors(res, error);
  }
};

export const deleteBoardMember = async (req: AuthRequest, res: Response) => {
  try {
    const boardMemberId = req.params.id;

    await boardMembersUsecase.delete(boardMemberId);

    return res.status(200).json({
      masg: 'Board Member Deleted',
    });
  } catch (error) {
    handleErrors(res, error);
  }
};
