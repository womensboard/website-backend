import Joi from 'joi';

export const supportersSchema = Joi.object({
  description: Joi.string().required(),
  supporters: Joi.array().items(Joi.string()).required().min(1),
});
