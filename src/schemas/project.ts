import { type Project } from 'entities';
import Joi from 'joi';

const requiredWhenStatusIs = (allowedStatus: Array<Project['status']>) => {
  return Joi.string().when('status', {
    is: Joi.valid(...allowedStatus),
    then: Joi.required(),
    otherwise: Joi.allow('', null).default(''),
  });
};
export const projectInputSchema = Joi.object({
  imageURL: Joi.string().required(),
  heading: Joi.string().required(),
  description: Joi.string().required(),
  donateLink: requiredWhenStatusIs(['current', 'ongoing']),
  donateLabel: requiredWhenStatusIs(['current', 'ongoing']),
  volunteerLink: requiredWhenStatusIs(['current']),
  volunteerLabel: requiredWhenStatusIs(['current']),
  waitlistLink: requiredWhenStatusIs(['upcoming']),
  waitlistLabel: requiredWhenStatusIs(['upcoming']),
  status: Joi.string().valid('ongoing', 'current', 'upcoming'),
});
