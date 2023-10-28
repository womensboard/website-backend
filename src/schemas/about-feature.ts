import Joi from 'joi';

export const aboutFeatureSchema = Joi.object({
  features: Joi.array().items(
    Joi.object({
      header: Joi.string().default('Mission Statement'),
      subHeader: Joi.string().default(
        'Our mission is: To foster the development of the individual Nigerian woman, empowering her with education and high standards of work and commitment of service to the community so as to make her a citizen better equipped to participate in the social progress of the country'
      ),
    }).and('header', 'subHeader'),
    Joi.object({
      header: Joi.string().default('Funding'),
      subHeader: Joi.string().default(''),
    }).and('header', 'subHeader'),
    Joi.object({
      header: Joi.string().default('Objectives'),
      subHeader: Joi.string().default(''),
    }).and('header', 'subHeader')
  ),
})
  .min(1)
  .max(3);
