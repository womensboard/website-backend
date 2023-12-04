import Joi from 'joi';

export const aboutFeatureSchema = Joi.array()
  .items(
    Joi.object({
      header: Joi.string().allow('').default('Mission Statement'),
      subHeader: Joi.string()
        .allow('')
        .default(
          'Our mission is: To foster the development of the individual Nigerian woman, empowering her with education and high standards of work and commitment of service to the community so as to make her a citizen better equipped to participate in the social progress of the country'
        )
        .optional(),
    })
  )
  .min(1);
