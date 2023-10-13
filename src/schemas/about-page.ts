import Joi from 'joi';

export const aboutPageContentSchema = Joi.object({
  heroTitle: Joi.string().required(),
  heroDescription: Joi.string().required(),
  missionStatement: Joi.string().required(),
  funding: Joi.string().required(),
  objective: Joi.string().required(),
  strategy: Joi.string().required(),
});
