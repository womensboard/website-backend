import Joi from 'joi';

export const governingCouncilDetailsSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().optional(),
  imageURL: Joi.string().optional(),
});
