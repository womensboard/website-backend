import Joi from 'joi';

export const newsContentSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  author: Joi.string().required(),
  shareURL: Joi.string().allow('').optional(),
  imageURL: Joi.array().items(Joi.string()).required().min(1),
});
