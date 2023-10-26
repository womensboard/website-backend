import Joi from 'joi';

export const nigerianYouthVoicesDetailSchema = Joi.object({
  subHeading: Joi.string().required(),
  year: Joi.string().optional(),
});
