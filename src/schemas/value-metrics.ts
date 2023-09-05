import Joi from 'joi';

export const valueMetricsSchema = Joi.object({
  metric_one_label: Joi.string().required().default('Partners'),
  metric_one_value: Joi.string().required().default('100+'),
  metric_two_label: Joi.string().required().default('Projects'),
  metric_two_value: Joi.string().required().default('1000+'),
  metric_three_label: Joi.string().required().default('|Beneficiaries'),
  metric_three_value: Joi.string().required().default('1M+'),
  metric_four_label: Joi.string().required().default('Lorem Ipsum'),
  metric_four_value: Joi.string().required().default('1000+'),
});
