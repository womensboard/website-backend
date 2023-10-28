import Joi from 'joi';

export const unCollaborationSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.array().optional(),
  imageURL: Joi.string().required(),
});
