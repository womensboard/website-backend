import Joi from 'joi';

export const contactSchema = Joi.object({
  category: Joi.string()
    .lowercase()
    .valid('partnership', 'sponsorship', 'enquiries', 'others')
    .default('enquiries'),
  officeAddress: Joi.string().optional(),
  emailAddress: Joi.string().optional(),
  facebook: Joi.string().optional(),
  instagram: Joi.string().optional(),
  linkedIn: Joi.string().optional(),
  twitter: Joi.string().optional(),
});
