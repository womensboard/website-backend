import { type AuthRequest } from 'types';
import { type Response } from 'express';
import { contributionsUsecase } from 'usecases';
import { handleErrors } from 'utils/helpers';

export const createContribution = async (req: AuthRequest, res: Response) => {
  try {
    const input = req.body;

    const data = await contributionsUsecase.create(input);

    return res.status(201).json({
      msg: 'Contribution was created successfully',
      data,
    });
  } catch (error) {
    return handleErrors(res, error);
  }
};

export const fetchContributions = async (req: AuthRequest, res: Response) => {
  try {
    const data = await contributionsUsecase.fetch();

    return res.status(200).json({
      data,
    });
  } catch (error) {
    return handleErrors(res, error);
  }
};

export const updateContribution = async (req: AuthRequest, res: Response) => {
  try {
    const contributionId = req.params.id;
    const contributionUpdateData = req.body;
    const data = await contributionsUsecase.update(
      contributionId,
      contributionUpdateData
    );

    return res.status(200).json({
      msg: 'Contribution was updated successfully',
      data,
    });
  } catch (error) {
    return handleErrors(res, error);
  }
};

export const deleteContribution = async (req: AuthRequest, res: Response) => {
  try {
    const contributionId = req.params.id;

    await contributionsUsecase.delete(contributionId);

    return res.status(200).json({
      msg: 'Contribution deleted',
    });
  } catch (error) {
    return handleErrors(res, error);
  }
};

export const filterContributionByYear = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const year = req.body.year;

    const data = await contributionsUsecase.filterByYear(year);

    return res.status(200).json({
      data,
    });
  } catch (error) {
    return handleErrors(res, error);
  }
};

export const fetchContributionById = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const contributionId = req.params.id;

    const data = await contributionsUsecase.fetchById(contributionId);

    return res.status(200).json({
      data,
    });
  } catch (error) {
    return handleErrors(res, error);
  }
};
