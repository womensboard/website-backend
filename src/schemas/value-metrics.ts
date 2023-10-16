import Joi from 'joi';

export const valueMetricsSchema = Joi.object({
  metricOneLabel: Joi.string().required().default('Partners'),
  metricOneValue: Joi.string().required().default('100+'),
  metricTwoLabel: Joi.string().required().default('Projects'),
  metricTwoValue: Joi.string().required().default('1000+'),
  metricThreeLabel: Joi.string().required().default('Beneficiaries'),
  metricThreeValue: Joi.string().required().default('1M+'),
  metricFourLabel: Joi.string().required().default('Lorem Ipsum'),
  metricFourValue: Joi.string().required().default('1000+'),
});
