import Joi from 'joi';

export const eventsContentSchema = Joi.object({
  title: Joi.string().required(),
  body: Joi.string().required(),
  buttonLabel: Joi.string().required(),
  eventImage: Joi.string().required(),
});
