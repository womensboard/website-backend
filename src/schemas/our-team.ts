import Joi from 'joi';

export const ourTeamSchema = Joi.object({
  content: Joi.string().required(),
});
