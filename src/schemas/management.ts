import Joi from 'joi';

export const managementSchema = Joi.object({
  name: Joi.string().required(),
  imageURL: Joi.string().required(),
});
