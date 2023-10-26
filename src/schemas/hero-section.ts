import Joi from 'joi';

export const heroSectionSchema = Joi.object({
  header: Joi.string().required().default("Women's Board"),
  subHeader: Joi.string().optional(),
  imageURL: Joi.array().items(Joi.string()).required(),
});
