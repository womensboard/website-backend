import Joi from 'joi';

export const eventsContentSchema = Joi.object({
  title: Joi.string().required(),
  body: Joi.string().required(),
  buttonLabel: Joi.string().allow('').optional(),
  eventImage: Joi.array().items(Joi.string()).required().min(1),
  shareURL: Joi.string().allow('').optional(),
  buttonURL: Joi.string().allow('').optional(),
});
