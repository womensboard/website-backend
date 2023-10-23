import Joi from 'joi';

export const contributionSchema = Joi.object({
  year: Joi.string().required(),
  subHeading: Joi.string().required(),
  activities: Joi.array().items(Joi.string()),
});
