import { type AuthRequest } from 'types';
import { type Response } from 'express';
import { eventsUsecase } from 'usecases';
import { handleErrors } from 'utils/helpers';

export const fetchEvent = async (req: AuthRequest, res: Response) => {
  try {
    const data = await eventsUsecase.fetch();

    return res.status(200).json({
      data,
    });
  } catch (error) {
    return handleErrors(res, error);
  }
};

export const createEvent = async (req: AuthRequest, res: Response) => {
  try {
    const input = req.body;

    const data = await eventsUsecase.create(input);

    return res.status(201).json({
      msg: 'Event was created successfully',
      data,
    });
  } catch (error) {
    return handleErrors(res, error);
  }
};

export const updateEvents = async (req: AuthRequest, res: Response) => {
  try {
    const eventId = req.params.id;
    const updateEventData = req.body;

    const data = await eventsUsecase.update(eventId, updateEventData);

    return res.status(200).json({
      msg: 'Event was updated successfully',
      data,
    });
  } catch (error) {
    return handleErrors(res, error);
  }
};

export const deleteEvent = async (req: AuthRequest, res: Response) => {
  try {
    const eventId = req.params.id;

    await eventsUsecase.delete(eventId);

    return res.status(200).json({
      msg: 'Events Deleted',
    });
  } catch (error) {
    return handleErrors(res, error);
  }
};
