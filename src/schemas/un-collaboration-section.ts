import Joi from 'joi';

export const unCollaborationSectionSchema = Joi.object({
  section: Joi.string()
    .lowercase()
    .valid('contribution', 'conference')
    .required(),
  year: Joi.string().optional(),
  subHeading: Joi.string().when('section', {
    is: 'contribution',
    then: Joi.string().default('Contribution 1'),
    otherwise: Joi.string().default('Conference 1'),
  }),
  activities: Joi.string().default(
    'Written statement on “Achieving gender equality and the empowerment of all women and girls in the context of climate change, environmental and disaster risk reduction policies and programmes” submitted to the 66th Session of Commission on the Status of Women, New York, 14th – 25th March'
  ),
});
