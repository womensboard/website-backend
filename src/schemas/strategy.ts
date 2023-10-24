import Joi from 'joi';

export const strategySchema = Joi.object({
  content: Joi.string().required(),
});
