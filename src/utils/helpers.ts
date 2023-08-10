import { DataValidationError, NotFound, Unauthorized } from 'utils/errors';
import { type Response } from 'express';
import { type ObjectSchema } from 'joi';

export function validateData<T>(schema: ObjectSchema, data: T) {
  const { value, error } = schema.validate(data, {
    abortEarly: false,
    errors: { wrap: { label: false } },
  });

  if (error != null) {
    throw new DataValidationError(error);
  }

  return value as T;
}

export function handleErrors(res: Response, error: unknown | Error) {
  if (error instanceof DataValidationError) {
    return res.status(400).json({
      msg: 'Validation Error',
      errors: error.errors,
    });
  }

  if (error instanceof NotFound) {
    return res.status(404).json({
      msg: error.msg,
    });
  }

  if (error instanceof Unauthorized) {
    return res.status(401).json({
      msg: error.msg,
    });
  }

  return res.status(500).json({
    msg: 'Unknown error',
  });
}
