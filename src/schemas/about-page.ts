import Joi from 'joi';

export const aboutPageContentSchema = Joi.object({
  header: Joi.string().required(),
  subHeader: Joi.string().required(),
  backgroundImage: Joi.string().required(),
});
