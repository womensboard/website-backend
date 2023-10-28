import Joi from 'joi';

export const partnersDetailSchema = Joi.object({
  subHeader: Joi.string().required(),
  logo: Joi.array().items(Joi.string()),
});
