import Joi from 'joi';

export const activiesSchema = Joi.object({
  imageURL: Joi.string().required(),
  description: Joi.string().required(),
});
