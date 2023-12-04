import Joi from 'joi';

export const heroSectionSchema = Joi.object({
  header: Joi.string().required().default("Women's Board"),
  subHeader: Joi.string().allow('').optional(),
  page: Joi.string()
    .valid('about', 'home', 'un-collaboration', 'project')
    .required(),
  imageURL: Joi.array().when('page', {
    is: 'home',
    then: Joi.array().items(Joi.string()).required(),
    otherwise: Joi.array().items(Joi.string()).length(1).required(),
  }),
});
