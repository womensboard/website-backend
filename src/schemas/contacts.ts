import Joi from 'joi';

export const contactSchema = Joi.object({
  officeAddress: Joi.string().optional(),
  emailAddress: Joi.string().optional(),
  phoneNumber: Joi.string().optional(),
  facebook: Joi.string().optional(),
  instagram: Joi.string().optional(),
  linkedIn: Joi.string().optional(),
  twitter: Joi.string().optional(),
});
