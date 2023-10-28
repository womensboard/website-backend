import Joi from 'joi';

export const aboutPageContentSchema = Joi.object({
  header: Joi.string().required(),
  subHeader: Joi.string().optional(),
  backgroundImage: Joi.string().required(),
});
