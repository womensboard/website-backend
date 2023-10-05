import Joi from 'joi';

export const heroSectionSchema = Joi.object({
  header: Joi.string().required().default("Women's Board"),
  headerCarousel: Joi.array().items(Joi.string()).required(),
  subHeader: Joi.string().required(),
  imageURL: Joi.string().required(),
});
