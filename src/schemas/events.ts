import Joi from 'joi';

export const eventsContentSchema = Joi.object({
  title: Joi.string().required(),
  body: Joi.string().required(),
  buttonLabel: Joi.string().optional(),
  eventImage: Joi.string().required(),
  shareURL: Joi.string().optional(),
  buttonURL: Joi.string().optional(),
});
