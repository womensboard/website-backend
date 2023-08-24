import { type ValidationError } from 'joi';

export class CustomError extends Error {}
export class NotFound extends CustomError {
  msg = 'Resource not found';
}

export class Unauthorized extends CustomError {
  msg = 'Not authorized';
}

export class DataValidationError extends CustomError {
  public readonly errors: object;
  constructor(error: ValidationError) {
    super('');
    const errorObject: Record<string, string[]> = {};
    for (const detail of error.details) {
      const key = detail.context?.key as string;
      const msg = detail.message;
      const keyErrors: string[] = errorObject[key] || [];
      keyErrors.push(msg);
      errorObject[key] = keyErrors;
    }

    this.errors = errorObject;
  }
}

export class InvalidToken extends Unauthorized {
  msg = 'The token you provided is invalid';
}

export class InvalidAuthorizationHeaders extends Unauthorized {
  msg = 'The headers you inputed are malformed invalid';
}

export class NewsNotFound extends NotFound {
  msg = 'News Not Found';
}

export class EventNotFound extends NotFound {
  msg = 'Event Not Found';
}

export class TrusteeNotFound extends NotFound {
  msg = 'Trustee Not Found';
}

export class BoardMemberNotFound extends NotFound {
  msg = 'Board Member Not Found';
}
