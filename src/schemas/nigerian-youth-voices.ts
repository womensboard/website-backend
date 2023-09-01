import Joi from 'joi';

export const nigerianYouthVoicesDetailSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  imageURL: Joi.string().required(),
});
