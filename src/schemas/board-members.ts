import Joi from 'joi';

export const boardMembersDetailsSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().optional(),
  imageURL: Joi.string().required(),
});
