import Joi from 'joi';

export const projectDetailsSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  author: Joi.string().required(),
  imageURL: Joi.string().required(),
});
