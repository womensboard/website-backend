import { SUPPORTED_PROJECT_LOCATIONS } from 'config';
import Joi from 'joi';

export const projectDetailsSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  location: Joi.string()
    .min(2)
    .lowercase()
    .valid(...SUPPORTED_PROJECT_LOCATIONS)
    .required(),
  imageURL: Joi.string().required(),
});
