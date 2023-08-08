import Joi from 'joi';


export const newsContentSchema = Joi.object({
  title: Joi.string().required(),
  createdAt: Joi.string().required(),
  description: Joi.string().required(),
  updatedAt: Joi.string().required(),
  author: Joi.string().required(),
  imageURL: Joi.string().required()
});