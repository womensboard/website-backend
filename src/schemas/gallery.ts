import Joi from 'joi';

export const gallerySchema = Joi.object({
  subHeader: Joi.string().optional(),
  imageURL: Joi.array().items(Joi.string()).min(1),
});
