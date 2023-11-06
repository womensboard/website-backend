import Joi from 'joi';

export const gallerySchema = Joi.object({
  subHeader: Joi.string(),
  imageURL: Joi.array().items(Joi.string()).min(1).max(3),
});
