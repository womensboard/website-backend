import Joi from 'joi';

export const aboutFeatureSchema = Joi.object({
  sectionOne: Joi.object({
    header: Joi.string().default('Mission Statement'),
    subHeader: Joi.string().default(
      'Our misson is : To foster the development of the individual Nigerian woman, empowering her with education and high standards of work and commitment of service to the community so as to make her a citizen better equipped to participate in the social progress of teh country'
    ),
  }).and('header', 'subHeader'),
  sectionTwo: Joi.object({
    header: Joi.string().default('Funding'),
    subHeader: Joi.string().default(''),
  }).and('header', 'subHeader'),
  sectionThree: Joi.object({
    header: Joi.string().default('Objectives'),
    subHeader: Joi.string().default(''),
  }).and('header', 'subHeader'),
}).min(1);
