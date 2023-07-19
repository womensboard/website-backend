import { type Request } from 'express';

export type AuthRequest = Request & {
  decoded?: Record<string, string>;
};
