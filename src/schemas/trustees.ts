import Joi from 'joi';

export const trusteesDetailsSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  imageURL: Joi.string().required(),
});
